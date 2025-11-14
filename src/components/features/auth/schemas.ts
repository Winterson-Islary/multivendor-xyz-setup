import { z } from "zod";

export const zodSignUpFormSchema = z
	.object({
		name: z.string().min(2, "Full name must be at least 2 characters."),
		email: z.email(),
		password: z.string().min(8, "Password must be at least 8 characters."),
		confirmPassword: z.string().min(1, "Please confirm your password."),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password does not match.",
		path: ["confirmPassword"],
	});

export type FormSchema = z.infer<typeof zodSignUpFormSchema>;
