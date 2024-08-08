import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    try {
      console.log("also reached here")
      const question = await dao.createQuestion(req.body);
      res.status(201).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteQuestion = async (req, res) => {
    console.log("reached server delete")
    try {
      const { id } = req.params;
      await dao.deleteQuestion(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getAllQuestions = async (req, res) => {
    try {
      const questions = await dao.getAllQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateQuestion = async (req, res) => {
    console.log("reached server update")
    try {
      const { id } = req.params;
      const status = await dao.updateQuestion(id, req.body);
      res.status(201).json(status)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  app.post("/api/questions", createQuestion);
  app.delete("/api/questions/:id", deleteQuestion);
  app.get("/api/questions", getAllQuestions);
  app.put("/api/questions/:id", updateQuestion);
}
