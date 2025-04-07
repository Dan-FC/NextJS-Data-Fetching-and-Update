"use server";

import prisma from "@/lib/prisma";

export async function createNewUserAction(prevState : string | null, formData : FormData): Promise<string> {
    const rawFormData = {
        name: formData.get('name') as string || '',
        password: formData.get('password') as string || '',
        role: formData.get('role') as string || '',
    }

    const userExists = await prisma.users.findFirst({
        where: {
            name: rawFormData.name,
            role: rawFormData.role,
            password: rawFormData.password
        }
    });
    
    if (userExists) {
        return "User already exists"
    }

    await prisma.users.create({
        data: {
            name: rawFormData.name,
            role: rawFormData.role,
            password: rawFormData.password,
            v: 1
        }
    })

    return "User saved successfully";
}