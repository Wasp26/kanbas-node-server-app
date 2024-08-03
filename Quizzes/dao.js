import model from "./model.js";

export const createQuiz = (quiz) => model.create(quiz);

export const findAllQuizzes = (courseId) => model.find({ courseId: courseId });

export const findQuizById = (courseId, quizId) =>
  model.find({ courseId: courseId, _id: quizId });

export const updateQuiz = (courseId, quizId, quiz) =>
  model.updateOne({ courseId: courseId, _id: quizId }, quiz);
