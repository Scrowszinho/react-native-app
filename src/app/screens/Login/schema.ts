import { z } from 'zod';

export const newLoginForm = z.object({
  userName: z.string().min(1, 'Nome é obrigatório'),
});

export type NewLoginFormType = z.infer<typeof newLoginForm>;
