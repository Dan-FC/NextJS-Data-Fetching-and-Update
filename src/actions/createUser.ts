"use server"

import { prisma } from "@/lib/prisma";

interface User {
    name     : string
    password : string
    role     : string
}
export async function createUserAction(newUser : User) {
    const userExists = await prisma.users.findFirst({
        where: {
            name: newUser.name,
            role: newUser.role,
            password: newUser.password
        }
    });
    
    if (userExists) {
        return { message: "User already exists"}
    }

    await prisma.users.create({
        data: {
            name: newUser.name,
            role: newUser.role,
            password: newUser.password,
            v: 1
        }
    }).then(() => ({ message: "User saved successfully" }))
}