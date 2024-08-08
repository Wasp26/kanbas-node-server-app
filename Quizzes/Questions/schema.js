import mongoose from "mongoose"
const questionSchema =  new mongoose.Schema(
  {
    id: String,
    type: String,
    points: Number,
    text: String,
    choices: [
      {
        id: Number,
        text: String,
        isCorrect: Boolean,
      }
    ],
    blanks: [{
      id: Number,
      text: String
    }],
    answer: Boolean
  
},{ collection: "questions" });
export default questionSchema;