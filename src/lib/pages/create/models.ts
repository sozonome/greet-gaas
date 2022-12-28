import { z } from "zod";

export const createFormRequestScheme = z.object({
  name: z
    .string({ required_error: "Name must be filled" })
    .min(1, { message: "Name must be filled" }),
  occasion: z.string(),
  customMessage: z.string().optional(),
  from: z.string().optional(),
});

export type CreateFormType = z.infer<typeof createFormRequestScheme>;
