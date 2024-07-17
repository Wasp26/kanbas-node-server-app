export default function Hello(app) {
  app.get("/hello", (req, res) => {
    res.send("Life i good!");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
}
