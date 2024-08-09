import * as dao from "./dao.js";

export default function AttemptRoutes(app) {
  const createAttempt = async (req, res) => {
    console.log(req.body);
    const attempt = await dao.createAttempt(req.body);
    res.json(attempt);
  };

  const findUserAttemptsForQuiz = async (req, res) => {
    const { userId, courseId, quizId } = req.params;
    console.log(userId, courseId, quizId);
    const attempts = await dao.findUserAttemptsForQuiz(
      userId,
      courseId,
      quizId
    );
    res.json(attempts);
  };

  app.post("/api/quizattempts", createAttempt);
  app.get(
    "/api/quizattempts/:userId/:courseId/:quizId",
    findUserAttemptsForQuiz
  );
}
