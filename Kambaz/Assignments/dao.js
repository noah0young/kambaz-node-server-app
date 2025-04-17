import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
}
export function deleteAssignment(id) {
  return model.deleteOne({ _id: id });
}
export function updateAssignment(id, updates) {
  return model.updateOne({ _id: id }, { $set: updates });
}
