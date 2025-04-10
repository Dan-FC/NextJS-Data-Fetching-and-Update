"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { Tab } from "@/components/Tab/Tab";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";

export default function ClientComponents() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Client Components:"
            />
          </div>
        <br></br>
          <div className={styles.tabs}>
            <Tab 
              text = "Fetching" 
              onClick = {
                () => router.push("/from_client_component/fetching")
              }
              
            /> 

            <Tab 
              text = "Updating"
              onClick = { 
                () => router.push("from_client_component/updating")
              }
              
            />
            <Tab 
              text = "Updating+Server Actions"
              onClick = { 
                () => router.push("from_client_component/updating_with_actions")
              }
            
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
        </div>
      </main>
    </div>
  );
}
