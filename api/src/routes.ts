import { Router } from "express";

import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/userController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();

router.post("/users", userController.create);
router.get("/user/:id", userController.show);
router.get("/users", userController.index);

router.post("/surveys", surveyController.create);
router.get("/survey/:id", surveyController.show);
router.get("/surveys", surveyController.index);

export { router };
