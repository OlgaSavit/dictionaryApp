import { userChangeWordStatusRequest } from "@/api/requests/word";
import { ToastTypes, WordStatusList } from "@/constants/general";
import { useToast } from "react-native-toast-notifications";
import { useCallback, useEffect, useState } from "react";

const useWordStatus = (word, onActionByStatusChange) => {
  const [currentWordStatus, setCurrentWordStattus] = useState(word?.status);
  const [isLoadingChangeStatus, setIsLoadingChangeStatus] = useState(false);
  const toast = useToast();
  useEffect(() => {
    setCurrentWordStattus(word?.status);
  }, [word]);
  const onChangeWordStatus = useCallback(
    (word) => {
      const statusId = WordStatusList.findIndex(
        (item) => item.value === currentWordStatus
      );
      const newStatusId =
        statusId + 1 <= WordStatusList?.length - 1 ? statusId + 1 : 0;
      const newStatusVal = WordStatusList[newStatusId]?.value;
      onChangeStatusAction({ wordId: word?.id, status: newStatusVal });
      console.log("w", word);
    },
    [currentWordStatus, word]
  );
  const onChangeStatusAction = async ({ wordId, status }) => {
    setIsLoadingChangeStatus(true);
    try {
      const response = await userChangeWordStatusRequest({ wordId, status });
      if (response.status === 200) {
        setCurrentWordStattus(status);
        onActionByStatusChange(status);
      }
    } catch (err) {
      toast.show(err?.message, { type: ToastTypes.danger });
    } finally {
      setIsLoadingChangeStatus(false);
    }
  };
  return { isLoadingChangeStatus, onChangeWordStatus, currentWordStatus };
};
export { useWordStatus };
