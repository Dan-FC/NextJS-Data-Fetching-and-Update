"use client";

import styles from "../fetching/page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

//! Import Actions
import { createUserAction } from "@/actions/createUser";
import { getAllUsersAction } from "@/actions/getAllUsers";

import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";

interface User {
  name     : string
  password : string
  role     : string
  v?: number
}

const userToCreate : User= {
  name : "John Update",
  password : "string",
  role     : "Admin"
}

export default function ClientWithActions() {
  const [response, setResponse] = useState("");
  const router = useRouter();

  const handleCreate = async () => {
    const res = await createUserAction(userToCreate);
    setResponse(JSON.stringify(res));
  }

  const handleGet = async () => {
    const res = await getAllUsersAction();
    setResponse(JSON.stringify(res))
  }
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Server Actions (Client):"
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
            text= "Create User"
            onClick={
              () => handleCreate()
            }
            loading = {false}
            size="small"
          />
          <Button
            text= "Get Users"
            onClick={
              () => handleGet()
            }
            loading = {false}
            size="small"
          />
          <p className={styles.titleResponse}>Response:</p>
          <p> {response}</p>
        </div>
      </main>
    </div>
  );
}
