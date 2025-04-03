import assignments from "../Database/assignments.js";
import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}
export function deleteAssignment(id) {
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== id
  );
}
export function updateAssignment(id, updates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === id);
  Object.assign(assignment, updates);
  return assignment;
}
