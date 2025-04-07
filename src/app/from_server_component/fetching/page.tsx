"use server";

import styles from "./page.module.css";
import { getAllUsersAction } from "@/actions/getAllUsers";

import { Title } from "@/components/Title/Title";

export default async function ServerFetching() {
  const users = await getAllUsersAction();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Fetching (Server):"
            />
          </div>
          <p className={styles.titleResponse}>Users:</p>
          <ul>
            {users ? (
              <p>{users.message}</p>      
            ) : (
              <p>No Users</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
