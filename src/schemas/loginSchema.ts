import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email('Email tidak valid').nonempty('Email wajib diisi'),
    password: z.string().min(8, 'Password minimal 8 karakter').nonempty('Password wajib diisi')
});

export type LoginFormData = z.infer<typeof loginSchema>;