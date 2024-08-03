import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    courseId: String,
    numQuestions: Number,
    published: Boolean,
    title: String,
    description: String,
    quizType: String,
    points: Number,
    group: String,
    shuffle: Boolean,
    hasTimeLimit: Number,
    timeLimit: Number,
    multipleAttempt: Boolean,
    showCorrect: Boolean,
    accessCode: String,
    oneQView: Boolean,
    webcamReq: Boolean,
    lockAfterAttempt: Boolean,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
  },
  { collection: "quizzes" }
);
export default quizSchema;
