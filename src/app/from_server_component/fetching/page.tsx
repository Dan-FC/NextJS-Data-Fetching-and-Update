"use server";

import styles from "./page.module.css";
import { getUserByNameAction } from "@/actions/getUserByName";

import { UserInterface } from "@/interfaces/user";
import { Title } from "@/components/Title/Title";

export default async function ServerFetching() {
  const user : UserInterface = await getUserByNameAction("John Update");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Fetching (Server):"
            />
          </div>
          <p className={styles.titleResponse}>Role Based Interface:</p>
          <ul>
            {user && user.role === "Admin"? (
              <p>"Admin Interface"</p>      
            ) : (
              <p>"Visitor Interface"</p>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
