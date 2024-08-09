import mongoose from "mongoose";
const attemptSchema = new mongoose.Schema(
  {
    userId: String,
    courseId: String,
    quizId: String,
    attemptNo: Number,
    answers: [
      {
        qid: String,
        answer: String,
      },
    ],
  },
  { collection: "attempts" }
);
export default attemptSchema;
