import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  if (
    enrollments.find(
      (entry) => userId === entry.user && courseId === entry.course
    )
  ) {
    return;
  }
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (entry) => !(entry.user === userId && entry.course === courseId)
  );
}
