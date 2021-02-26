import { Request, Response } from "express";
import { resolve } from "path";
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

      const user = await userRepository.findOne({ email });

      if (!user) { return res.status(400).json({ message: "Usuário não encontrado." }); }

      const survey = await surveysRepository.findOne({ id: survey_id });

      if (!survey) { return res.status(400).json({ message: "Enquete não encontrada." }); }

      const npsPath = resolve(__dirname, "..", "views", "emails", "nps.hbs");

      const variables = {
        name: user.name,
        title: survey.title,
        description: survey.description,
        user_id: user.id,
        link: process.env.URL_MAIL,
      };

      const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
        where: [{ user_id: user.id }, { value: null }],
        relations: ["user", "survey"],
      });

      if (surveyUserAlreadyExists) {
        await SendMailService.execute(email, survey.title, variables, npsPath);
        return res.json(surveyUserAlreadyExists);
      }

      const surveyUser = surveysUsersRepository.create({
        user_id: user.id,
        survey_id,
      });

      await SendMailService.execute(email, survey.title, variables, npsPath);

      await surveysUsersRepository.save(surveyUser);

      return res.json(surveyUser);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao enviar o email." });
    }
  }
}

export { SendMailController };
