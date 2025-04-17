import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    description: String,
    points: Number,
    "due date": Date,
    "available date": Date,
  },
  { collection: "assignments" }
);
export default courseSchema;
