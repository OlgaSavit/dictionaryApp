import {
  attachWordRequest,
  createWordRequest,
  editWordRequest,
  wordTranslateGenerateRequest,
  wordVoiceGenerateRequest,
} from "@/api/requests/word";
import { appendAllTopicList, getAllTopicList } from "@/store/slices/topicSlice";
import { extractWordId, onInputOnlyNumber } from "@/utils/normalize";
import { ToastTypes, TranslateOptions } from "@/constants/general";
import { useToast } from "react-native-toast-notifications";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getValidationRules } from "./validation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import _isEqual from "lodash/isEqual";
import { Alert } from "react-native";
import { useFormik } from "formik";

const useWordForm = ({ currentWord, topicItem }) => {
  const toast = useToast();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { langDirect, routeName } = useSelector((store) => store.global || {});
  const [isTranslationLoading, setIsTranslationLoading] = useState(false);

  const { allTopicList, allTopicListMeta } = useSelector(
    (state) => state.topic || {}
  );
  const formikInitialValues = {
    word: currentWord ? currentWord?.word : "",
    wordTranslate: currentWord ? currentWord?.wordTranslate : "",
    wordPhonetic: currentWord ? currentWord?.wordPhonetic : "",
    langDirect: currentWord ? currentWord.langDirect : langDirect,
    topicIds: topicItem ? [topicItem?.id] : null,
    voice: currentWord ? currentWord.voice : true,
  };
  const [isFormChanged, setIsFormChanged] = useState({
    word: false,
    wordTranslate: false,
    wordPhonetic: false,
    langDirect: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [dataErrors, setDataErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);
  const [topicList, setTopicList] = useState([
    { value: topicItem?.id, label: topicItem.title },
  ]);
  const { isValid, values, setFieldValue, validateForm, errors, setErrors } =
    useFormik({
      initialValues: formikInitialValues,
      validationSchema: getValidationRules(),
    });
  useEffect(() => {
    onLoadTopicList();
  }, []);
  useEffect(() => {
    validateForm(values);
    setIsValidForm(isValid);
    setIsLoading(false);
  }, [values, errors, isValid]);
  useEffect(() => {
    let currentTopic = { value: topicItem?.id, label: topicItem.title };
    const filteredList = allTopicList?.filter(
      (item) => item.id !== currentTopic.value
    );
    const newList = filteredList?.map((item) => {
      return { value: item?.id, label: item.title };
    });
    setTopicList([currentTopic, ...newList]);
  }, [allTopicList, topicItem]);

  const isDisabledBtn = () => {
    if (!isValidForm || isLoading) {
      return true;
    }
    if (_isEqual(formikInitialValues, values)) {
      return true;
    } else {
      return false;
    }
  };
  const onChangeAddVoice = (val) => {
    console.log("currentWord.voice", currentWord.voice);
    if (!currentWord?.voice) {
      setDataErrors((prevErrors) => ({ ...prevErrors, voice: null }));
      setFieldValue("voice", val);
      setIsFormChanged((prevState) => ({ ...prevState, voice: true }));
    }
  };

  const onLoadTopicList = (page = 1) => {
    dispatch(getAllTopicList({ page: page, onlyMy: 1, perPage: 10 }));
  };
  const onAddLoadTopicToList = () => {
    if (allTopicListMeta?.current_page + 1 <= allTopicListMeta?.last_page) {
      dispatch(
        appendAllTopicList({
          page: allTopicListMeta?.current_page + 1,
          onlyMy: 1,
        })
      );
    }
  };
  const goToScreen = (path) => {
    if (path) {
      navigation.navigate(path);
    }
  };
  const onSuccessCreated = (id, txt) => {
    toast.show(txt, {
      type: ToastTypes.success,
    });
    navigation.navigate(routerNameList.topicView, {
      topicId: id,
    });
  };

  const onEditWord = async (data) => {
    try {
      setIsLoading(true);
      const response = await editWordRequest(data, currentWord.id);
      if (response.status === 200) {
        if (data.voice === true) {
          onWordVoiceGenerate(currentWord.id);
        } else {
          onSuccessCreated(topicItem?.id, t("words.successEdit"));
        }
      }
    } catch (err) {
      toast.show(err?.message, { type: ToastTypes.danger });
    }
  };
  const onCreateWord = async (data) => {
    try {
      setIsLoading(true);
      const response = await createWordRequest(data);
      if (response.status === 201 || response.status === 200) {
        if (data.voice) {
          const newWordId = response.data?.data?.id;
          onWordVoiceGenerate(newWordId);
        } else {
          onSuccessCreated(topicItem?.id, t("words.successCreate"));
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      if (err?.status === 409) {
        Alert.alert(t("texts.wordIsInDictionary"), "", [
          {
            text: t("buttons.confirm"),
            onPress: () => {
              onAttachWord(topicItem, extractWordId(err?.message));
            },
          },
          {
            text: t("buttons.cancel"),
            onPress: () => {},
            style: "cancel",
          },
        ]);
      } else {
        toast.show(err?.message, { type: ToastTypes.danger });
      }
    }
  };

  const handleSubmit = async (values) => {
    if (isValid) {
      const data = {
        word: values.word,
        wordTranslate: values.wordTranslate,
        wordPhonetic: values?.wordPhonetic ? values?.wordPhonetic : undefined,
        langDirect: values.langDirect,
        topicIds: values?.topicIds,
        voice: values?.voice,
      };
      if (currentWord) {
        onEditWord(data);
      } else {
        onCreateWord(data);
      }
    }
  };

  const onAttachWord = async (topicItem, wordId) => {
    setIsLoading(true);
    try {
      const response = await attachWordRequest({
        wordId: wordId,
        topicId: topicItem.id,
      });
      if (response.status === 200) {
        onSuccessCreated(topicItem?.id, t("words.successAdd"));
      }
    } catch (err) {
      toast.show(err?.message, { type: ToastTypes.danger });
    }
  };

  const onWordVoiceGenerate = async (id) => {
    try {
      const response = await wordVoiceGenerateRequest(id);
      if (response.status === 200) {
        toast.show(t("words.successCreate"), {
          type: ToastTypes.success,
        });
        navigation.navigate(routerNameList.topicView, {
          topicId: topicItem?.id,
        });
      }
    } catch (err) {
      toast.show(err?.message, { type: ToastTypes.danger });
    } finally {
      setIsLoading(false);
    }
  };
  const onChangeInput = ({ value, name, isOnlyNumber = false }) => {
    let val = value;
    if (isOnlyNumber) {
      val = onInputOnlyNumber(value);
    }
    setDataErrors({ ...dataErrors, [name]: null });
    setFieldValue([name], val);
    setIsFormChanged({ ...isFormChanged, [name]: true });
  };
  const onChangeMultiInput = ({ items, name }) => {
    setDataErrors({ ...dataErrors, [name]: null });
    let values = items?.map((item) => item.value);
    setFieldValue([name], values);
    setIsFormChanged({ ...isFormChanged, [name]: true });
  };
  const onGetTranslation = async (word) => {
    const data = {
      text: word,
      sourceLang: TranslateOptions.sourceLang,
      targetLang: TranslateOptions.targetLang,
    };
    try {
      setIsTranslationLoading(true);
      const response = await wordTranslateGenerateRequest(data);
      if (response.status === 200) {
        setFieldValue("wordTranslate", response.data.translatedText);
      }
    } catch (err) {
      toast.show(err?.message, { type: ToastTypes.danger });
    } finally {
      setIsTranslationLoading(false);
    }
  };
  return {
    values,
    dataErrors,
    errors,
    isFormChanged,
    isValidForm,
    langDirect,
    handleSubmit,
    onChangeInput,
    goToScreen,
    isLoading,
    topicList,
    onLoadTopicList,
    onAddLoadTopicToList,
    onChangeMultiInput,
    isDisabledBtn,
    onChangeAddVoice,
    onGetTranslation,
    isTranslationLoading,
  };
};
export { useWordForm };
