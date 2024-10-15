import http from "../index";

export const createWordRequest = (data) => http.post("/dictionary/words", data);
export const editWordRequest = (data, id) =>
  http.put(`/dictionary/words/${id}`, data);
export const userChangeWordStatusRequest = ({ wordId, status }) =>
  http.post(`/dictionary/user/words/${wordId}`, { status });
export const deleteWordByIdRequest = (wordId) =>
  http.delete(`/dictionary/words/${wordId}`);

export const wordVoiceGenerateRequest = (id) =>
  http.put(`/dictionary/words/${id}/voice`);
export const wordTranslateGenerateRequest = (params) =>
  http.get("/dictionary/words/generate/translate", {
    params: {
      text: params.text,
      sourceLang: params.sourceLang,
      targetLang: params.targetLang,
    },
  });
export const attachWordRequest = ({ wordId, topicId }) =>
  http.post(`/dictionary/words/${wordId}/attach`, { topicId: topicId });
