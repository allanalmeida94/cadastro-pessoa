import User from '@/models/User';
import connect from '@/utils/database/db';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      await connect();

      const emailExists = await User.findOne({ email });

      if (emailExists) {
        return res.status(409).json({
          message: 'E-mail já cadastrado!',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 5);

      const newUser = new User({
        email,
        password: hashedPassword,
      });

      await newUser.save();

      return res.status(201).json({
        message: 'E-mail cadastrado com sucesso!',
      });

    } catch (error) {
      return res.status(500).json({
        message: 'Erro ao cadastrar usuário, tente novamente mais tarde!',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }
}
