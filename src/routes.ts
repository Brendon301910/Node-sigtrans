import { Router } from "express";
import { ColaboradoresController } from "./controllers/ColaboradoresController";
import { getAllColaboradoresController } from "./controllers/GetAllColaboradoresController";
import { DeleteColaboradoresController } from "./controllers/DeleteColaboradoresController";
import { UpdateColaboradoresController } from "./controllers/UpdateCategoryController";
import { GruposController } from "./controllers/GruposController";
import { GetAllGrupoController } from "./controllers/GetAllGruposController";
import { DepartamentosController } from "./controllers/DepartamentosController";
import { GetAllDepartamentosController } from "./controllers/GetAllDepartamentosController";

const routes = Router();

routes.post("/colaboradores", new ColaboradoresController().handle);
routes.get("/colaboradores", new getAllColaboradoresController().handle);
routes.delete("/colaboradores/:id", new DeleteColaboradoresController().handle);
routes.put("/colaboradores/:id", new UpdateColaboradoresController().handle);

routes.post("/Grupos", new GruposController().handle);
routes.get("/Grupos", new GetAllGrupoController().handle);

routes.post("/Departamentos", new DepartamentosController().handle);
routes.get("/Departamentos", new GetAllDepartamentosController().handle);

export{ routes};
