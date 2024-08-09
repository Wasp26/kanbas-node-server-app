import model from "./model.js";

export const createAttempt = (attempt) => {
  return model.create(attempt);
};

export const findUserAttemptsForQuiz = (userId, courseId, quizId) => {
  return model.findOne({ userId: userId, courseId: courseId, quizId: quizId });
};
