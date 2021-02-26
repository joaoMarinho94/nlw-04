import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {
  async execute(req: Request, res: Response): Promise<any> {
    try {
      const { email, survey_id } = req.body;

      const userRepository = getCustomRepository(UserRepository);
      const surveysRepository = getCustomRepository(SurveysRepository);
      const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

      const userAlreadyExists = await userRepository.findOne({ email });

      if (!userAlreadyExists) { return res.status(400).json({ message: "Usuário não encontrado." }); }

      const survey = await surveysRepository.findOne({ id: survey_id });

      if (!survey) { return res.status(400).json({ message: "Enquete não encontrada." }); }

      const surveyUser = surveysUsersRepository.create({
        user_id: userAlreadyExists.id,
        survey_id,
      });

      await SendMailService.execute(email, survey.title, survey.description);

      await surveysUsersRepository.save(surveyUser);

      return res.json(surveyUser);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao enviar o email." });
    }
  }
}

export { SendMailController };
