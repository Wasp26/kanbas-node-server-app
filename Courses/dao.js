import model from "./model.js";

export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};

export const getAllCourses = () => model.find();

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, course) =>
  model.updateOne({ _id: courseId }, { $set: course });
