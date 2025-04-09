//!Por defecto todo componente en Next es un Server Component a menos que uses
//!la directiva "use client"
"use client"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { Tab } from "@/components/Tab/Tab";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";

export default function ServerComponents() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Server Components:"
            />
          </div>
        <br></br>
          <div className={styles.tabs}>
            <Tab 
              text = "Fetching" 
              onClick = {
                () => router.push("from_server_component/fetching")
              }
              
            /> 

            <Tab 
              text = "Updating"
              onClick = { 
                () => router.push("from_server_component/updating")
              }
            />
          </div>
          <Button
            text= "Go Back"
            onClick={
              () => router.push("/")
            }
            loading = {false}
            size="small"
          />
        </div>
      </main>
    </div>
  );
}
