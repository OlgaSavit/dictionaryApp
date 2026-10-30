import { useToast } from "react-native-toast-notifications";
import { getAllTopicList } from "@/store/slices/topicSlice";
import { createTopicRequest } from "@/api/requests/topic";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { onInputOnlyNumber } from "@/utils/normalize";
import { getValidationRules } from "./validation";
import { ToastTypes } from "@/constants/general";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

const useTopicForm = ({ currentTopic }) => {
  const toast = useToast();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { langDirect } = useSelector((store) => store.global || {});
  const formikInitialValues = {
    title: currentTopic ? currentTopic?.title : "",
    description: currentTopic ? currentTopic?.description : "",
    order: currentTopic ? currentTopic?.currentTopic.order : null,
    langDirect: currentTopic
      ? currentTopic?.currentTopic.langDirect
      : langDirect,
  };
  const [isFormChanged, setIsFormChanged] = useState({
    title: false,
    description: false,
    order: false,
    langDirect: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [dataErrors, setDataErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);
  const { isValid, values, setFieldValue, validateForm, errors, setErrors } =
    useFormik({
      initialValues: formikInitialValues,
      validationSchema: getValidationRules(),
    });
  useEffect(() => {
    validateForm(values);
    setIsValidForm(isValid);
  }, [values, errors, isValid]);
  const goToScreen = (path) => {
    if (path) {
      navigation.navigate(path);
    }
  };

  const handleSubmit = async (values) => {
    if (isValid) {
      const data = {
        title: values.title,
        description: values?.description ? values?.description : undefined,
        langDirect: values.langDirect,
        order: values.order ? parseInt(values.order) : undefined,
      };
      try {
        setIsLoading(true);
        const response = await createTopicRequest(data);
        if (response.status === 201) {
          toast.show(t("topic.successCreateTopic"), {
            type: ToastTypes.success,
          });
          navigation.navigate(routerNameList.topicList);
        }
      } catch (err) {
        toast.show(err?.message, { type: ToastTypes.danger });
      } finally {
        setIsLoading(false);
      }
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
  };
};
export { useTopicForm };
