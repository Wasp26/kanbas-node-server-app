import model from "./model.js";

export const createUser = (user) => {
  delete user._id;
  const date = new Date().toISOString().split("T")[0];
  user = {
    ...user,
    loginId: Math.floor(Math.random() * 1000000000).toString(),
    section: "S101",
    lastActivity: date,
  };
  return model.create(user);
};

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>
  model.findOne({ username: username });

export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });

export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const findUsersByRole = (role) => model.find({ role: role });

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const addCourseToUser = (userId, courseId) =>
  model.updateOne({ _id: userId }, { $push: { courses: courseId } });

export const getCourses = (userId) =>
  model.findOne({ _id: userId }, { courses: 1, _id: 0 });
