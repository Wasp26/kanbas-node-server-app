import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    course: String,
    lessons: [
      {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        description: String,
        module: { type: String, required: true },
      },
    ],
  },
  { collection: "modules" }
);
export default moduleSchema;
