import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: String,
  type: String,
  points: Number,
  text: String,
  choices: [
    {
      id: Number,
      text: String,
      isCorrect: Boolean
    }
  ],
  blanks: [
    {
      id: Number,
      text: String
    }
  ],
  answer: Boolean
}, 
{
  _id: false // Prevent Mongoose from creating a new _id for each question
});

const quizSchema = new mongoose.Schema({
  courseId: String,
  numQuestions: Number,
  published: Boolean,
  title: String,
  description: String,
  quizType: String,
  points: Number,
  group: String,
  shuffle: Boolean,
  hasTimeLimit: Boolean,
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
  questions: [questionSchema]
}, 
{
  collection: "quizzes",
  timestamps: true // Optional: add createdAt and updatedAt fields
});

export default quizSchema;
