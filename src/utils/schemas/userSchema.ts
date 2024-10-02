import { z } from "zod";

export const userSchema = z.object({
  email: z.string().min(1, 'O campo e-mail é obrigatório').email('E-mail inválido!'),
  password: z.string().min(4, 'A senha deve conter pelo menos 4 dígitos')
})

export type userData = z.infer<typeof userSchema>
