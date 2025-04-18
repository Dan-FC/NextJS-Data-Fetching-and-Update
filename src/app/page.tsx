"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { Tab } from "@/components/Tab/Tab";
import { Title } from "@/components/Title/Title";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Everything about Fetching and Updating"
            />
          </div>
        <br></br>
          <div className={styles.tabs}>
            <Tab 
              text = "From Client Components" 
              onClick = {
                () => router.push("/from_client_component")
              }
            /> 

            <Tab 
              text = "From Server Components"
              onClick = { 
                () => router.push("/from_server_component")
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}
