import { z } from 'zod';

export const newOptionForm = z.object({
  option: z.number(),
});

export const newUserForm = z.object({
  name: z.string().min(1, 'Digite um nome valido'),
  salary: z.string().min(1, 'Digite um salario valido'),
  companyValuation: z.string().min(1, 'Digite um valor da empresa valido'),
});

export type NewOptionFormType = z.infer<typeof newOptionForm>;
export type NewUserFormType = z.infer<typeof newUserForm>;
