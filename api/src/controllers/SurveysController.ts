import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController {
  async create(req: Request, res: Response): Promise<any> {
    try {
      const { title, description } = req.body;

      const surveysRepository = getCustomRepository(SurveysRepository);

      const survey = surveysRepository.create({ title, description });

      await surveysRepository.save(survey);

      return res.json(survey);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao criar o usuário." });
    }
  }

  async show(req: Request, res:Response): Promise<any> {
    try {
      const { id } = req.params;

      const surveysRepository = getCustomRepository(SurveysRepository);

      const survey = await surveysRepository.findOneOrFail(id);

      return res.json(survey);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar a enquete." });
    }
  }

  async index(req: Request, res:Response): Promise<any> {
    try {
      const surveysRepository = getCustomRepository(SurveysRepository);

      const surveys = await surveysRepository.find();

      return res.json(surveys);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar as enquetes." });
    }
  }
}

export { SurveysController };
