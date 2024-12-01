import { z } from 'zod';

export const newOptionForm = z.object({
  option: z.number(),
});

export type NewOptionFormType = z.infer<typeof newOptionForm>;
