import Database from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments/", (req, res) => {
    const { cid } = req.params;
    const assignments = Database.assignments.filter(
      (assignment) => assignment.course === cid
    );
    res.json(assignments);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      _id: new Date().getTime().toString(),
    };
    Database.assignments.push(newAssignment);
    res.send(newAssignment);
  });

  app.delete("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { cid, aid } = req.params;
    Database.assignments = Database.assignments.filter(
      (assignment) => assignment.course != cid || assignment._id != aid
    );
    res.sendStatus(200);
  });

  app.put("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { cid, aid } = req.params;
    console.log(cid);
    console.log(aid);
    console.log(JSON.stringify(req.body));
    const assignmentIndex = Database.assignments.findIndex(
      (assignment) => assignment.course === cid && assignment._id === aid
    );
    Database.assignments[assignmentIndex] = {
      ...Database.assignments[assignmentIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
}
