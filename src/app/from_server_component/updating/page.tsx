"use server";

import styles from "../fetching/page.module.css";

import { createUserAction } from "@/actions/createUser";

import { Title } from "@/components/Title/Title";

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

export default async function ClientWithActions() {
  const response = await createUserAction(userToCreate);
  
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
          <p> {response?.message}</p>
        </div>
      </main>
    </div>
  );
}
