"use server"

import { prisma } from "@/lib/prisma";

export async function getAllUsersAction() {
    const users = await prisma.users.findMany();

    if (users.length == 0) {
        return { message : "No users"}
    }

    return { message : JSON.stringify(users)}
}