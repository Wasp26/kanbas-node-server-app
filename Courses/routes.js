import * as dao from "./dao.js";
import * as userDao from "../Users/dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = await dao.createCourse({
      ...req.body,
      number: "RS" + Math.floor(Math.random() * 1000),
    });
    const status = await userDao.addCourseToUser(
      currentUser._id,
      newCourse._id
    );
    res.json(newCourse);
  };

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  };

  const getAssociatedCourses = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const courseIds = (await userDao.getCourses(currentUser._id))["courses"];
    const courses = await dao.getCoursesByIds(courseIds);

    res.json(courses);
  };

  const getUnAssociatedCourses = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const courseIds = (await userDao.getCourses(currentUser._id))["courses"];
    let courses = await dao.getCoursesNotInIds(courseIds);
    res.json(courses);
  };

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  };

  const enrollToCourse = async (req, res) => {
    const { cid } = req.params;

    const currentUser = req.session["currentUser"];
    const status = await userDao.addCourseToUser(currentUser._id, cid);
    console.log(status);
    res.json(status);
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", getAssociatedCourses);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:id", updateCourse);
  app.get("/api/courses/unenrolled", getUnAssociatedCourses);
  app.post("/api/courses/enroll/:cid", enrollToCourse);
}
