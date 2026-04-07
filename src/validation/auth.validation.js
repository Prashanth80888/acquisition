import z, { email } from 'zod';

export const signupSchema=  z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['user', 'admin']).default('user'),
});

export const signInSchema =z.object({
    email: z.email().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})

