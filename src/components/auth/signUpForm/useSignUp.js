import { useToast } from "react-native-toast-notifications";
import routerNameList from "@/navigation/routerNameList";
import { useNavigation } from "@react-navigation/native";
import { userSignUpRequest } from "@/api/requests/auth";
import { getValidationRules } from "./validation";
import { ToastTypes } from "@/constants/general";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useFormik } from "formik";

const useSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toast = useToast();
  const formikInitialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [isFormChanged, setIsFormChanged] = useState({
    username: false,
    email: false,
    password: false,
    confirm_password: false,
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
      const formData = {
        name: values?.username,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.confirm_password,
      };
      try {
        setIsLoading(true);
        let resp = await userSignUpRequest(formData);
        if (resp?.status === 201) {
          toast.show(t("auth.successRegister"), { type: ToastTypes.success });
          navigation.navigate(routerNameList.signIn);
        }
      } catch (err) {
        toast.show(err?.message, { type: ToastTypes.danger });
      } finally {
        setIsLoading(false);
      }
    }
  };
  const onChangeInput = ({ value, name }) => {
    setDataErrors({ ...dataErrors, [name]: null });
    setFieldValue([name], value);
    setIsFormChanged({ ...isFormChanged, [name]: true });
  };
  return {
    values,
    dataErrors,
    errors,
    isFormChanged,
    isValidForm,
    handleSubmit,
    onChangeInput,
    goToScreen,
    isLoading,
  };
};
export { useSignUp };
