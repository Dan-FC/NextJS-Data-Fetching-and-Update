"use client";

import styles from "../fetching/page.module.css";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { Post } from "@/types/Post";

export default function ClientUpdating() {
  const router = useRouter();
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "";

  //!para Data Update debemos usar useSWRMutation
  const fetcher = (url: string) => fetch(url, { 
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "Sending information to who-knows where",
      body: "Hey lets mine and craft!"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json()).then((json) => json as Post)

  //* Ahora en vez de usar mutate usamos trigger para comandar la post
  const { data, trigger } = useSWRMutation(apiURL + "/posts", fetcher);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Updating (Client):"
            />
          </div>
          <Button
            text= "Go Back"
            onClick={
              () => router.back()
            }
            loading = {false}
            size="small"
          />
          <Button
            text= "Post"
            onClick={
              () => trigger()
            }
            loading = {false}
            size="small"
          />
          <div className={styles.dataContainer}>
            {data ? 
            <>
              <h1 className={styles.titleResponse}>Posted Data:</h1>
              <p className={styles.response}>ID: {data.id}</p>
              <p className={styles.response}>UserID: {data.userId}</p>
              <p className={styles.response}>Body: {data.body}</p>
              <p className={styles.response}>Title: {data.title}</p>
            </>:<>No post</>}
          </div>
        </div>
      </main>
    </div>
  );
}
