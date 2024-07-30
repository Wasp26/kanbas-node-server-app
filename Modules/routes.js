import * as dao from "./dao.js";

export default function ModulesRoutes(app) {
  const createModule = async (req, res) => {
    const { cid } = req.params;

    const module = await dao.createModule({ ...req.body, cid: cid });
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const getAllModules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.getAllModules(cid);
    res.json(modules);
  };

  app.get("/api/courses/:cid/modules", getAllModules);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
}
