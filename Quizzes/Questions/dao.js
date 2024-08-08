import QuestionModel from "./model.js";

export const createQuestion = async (questionData) => {
  const question = new QuestionModel(questionData);
  return await question.save();
};


export const deleteQuestion = async (id) => {
  return await QuestionModel.findOneAndDelete({ id });
};

export const getAllQuestions = async () => {
  return await QuestionModel.find();
};

export const updateQuestion = async (id, questionData) => {
  return await QuestionModel.updateOne({ id }, questionData);
};