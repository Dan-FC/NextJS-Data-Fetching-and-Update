"use server";

import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";
import { DataContainer } from "@/components/DataContainer/DataContainer";
import { Title } from "@/components/Title/Title";
import { User } from "@/types/User";

// Server
export default async function ServerFetching() {
  // Realiza el fetch en el servidor
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "";
  const response = await fetch(`${apiURL}/users`);
  const users: User[] = await response.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title text="Fetching (Server):" />
            <p>Dentro de este componente no se puede agregar interactividad ya que es un Server Componente</p>
          </div>
          {/* <Button text="Go Back" onClick={() => window.history.back()} loading={false} size="small" />
          <Button text="Refresh" onClick={() => window.location.reload()} loading={false} size="small" /> */}
          <div className={styles.dataContainer}>
            {users.length === 0 ? (
              <div>No data found</div>
            ) : (
              <DataContainer users={users} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
