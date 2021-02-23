import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";

class UserController {
  async create(req: Request, res: Response): Promise<any> {
    try {
      const { name, email } = req.body;

      const usersRepository = getRepository(User);

      const userAlreadyExists = await usersRepository.findOne({ email });

      if (userAlreadyExists) {
        return res.status(400)
          .json({ message: "Usuário já está cadastrado." });
      }

      const user = usersRepository.create({ name, email });

      await usersRepository.save(user);

      return res.json(user);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao criar o usuário." });
    }
  }

  async show(req: Request, res:Response): Promise<any> {
    try {
      const { id } = req.params;

      const usersRepository = getRepository(User);

      const user = await usersRepository.findOneOrFail(id);

      return res.json(user);
    } catch (error) {
      console.log("error: ", error);
      return res.status(500).json({ message: "Ocorreu um erro ao buscar o usuário." });
    }
  }
}

export { UserController };
