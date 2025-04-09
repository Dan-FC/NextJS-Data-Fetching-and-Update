"use server"

import { Post } from "@/types/Post";


export async function createPostAction(apiURL :string ,newPost : Post) {
    try {
        const response = await fetch(apiURL, { 
            method: "POST",
            body: JSON.stringify({
                userId: newPost.userId,
                title: newPost.title,
                body: newPost.body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to create post: ${response.statusText}`);
        }

        return await response.json() as Post;
    } catch {
        throw Error ("Something happened when creating Post")
    }
}
    