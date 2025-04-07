"use server"

import { prisma } from "@/lib/prisma";
import { UserInterface } from "@/interfaces/user";

export async function getUserByNameAction(searchName : string) {
    const user = await prisma.users.findFirst({
        where: {
            name: searchName
        }
    });

    if (!user) {
        throw Error ("User Not Found")
    }

    return user as UserInterface;
}