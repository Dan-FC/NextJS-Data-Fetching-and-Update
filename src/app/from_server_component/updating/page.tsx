"use server";

import styles from "../fetching/page.module.css";

import { createPostAction } from "@/actions/createPost";
import { Title } from "@/components/Title/Title";
import { Post } from "@/types/Post";

export default async function ClientWithActions() {
  const newPost : Post = {
    userId: 1,
    title: "Sending information from a sever component",
    body: "I can't add dinamic interaction to this!!"
  }

  const apiURL = process.env.NEXT_PUBLIC_API_URL || "";
  const response : Post | void  = await createPostAction(apiURL + "/posts", newPost) ;
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Updating (Server):"
            />
          </div>
          <p className={styles.titleResponse}>Response:</p>
          {response !== undefined ? 
            <>
              <h1 className={styles.titleResponse}>Posted Data:</h1>
              <p className={styles.response}>ID: {(response as Post).id}</p>
              <p className={styles.response}>UserID: {(response as Post).userId}</p>
              <p className={styles.response}>Body: {(response as Post).body}</p>
              <p className={styles.response}>Title: {(response as Post).title}</p>
            </>:<>No post</>}
        </div>
      </main>
    </div>
  );
}
