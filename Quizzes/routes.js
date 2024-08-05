import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const findAllQuizzes = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findAllQuizzes(courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { courseId, quizId } = req.params;
    const quiz = await dao.findQuizById(courseId, quizId);
    // console.log(quiz);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.updateQuiz(courseId, quizId, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.deleteQuiz(courseId, quizId);
    res.send(status);
  };

  const findQuizzesByPartialName = async (req, res) => {
    const { courseId, partialName } = req.params;
    const quizzes = await dao.findQuizzesByPartialName(courseId, partialName);
    res.json(quizzes);
  };

  app.post("/api/quizzes/:courseId", createQuiz);
  app.get("/api/quizzes/:courseId", findAllQuizzes);
  app.get("/api/quizzes/:courseId/:quizId", findQuizById);
  app.put("/api/quizzes/:courseId/:quizId", updateQuiz);
  app.delete("/api/quizzes/:courseId/:quizId", deleteQuiz);
  app.get(
    "/api/quizzes/:courseId/search/:partialName",
    findQuizzesByPartialName
  );
}
