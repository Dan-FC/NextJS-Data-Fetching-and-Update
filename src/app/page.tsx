"use client";

import styles from "./page.module.css";
import { Tab } from "@/components/Tab/Tab"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>

        <Tab 
          text = "Fetching" 
          onClick = {
            () => router.push("/fetching")
          }
        /> 
        
        <Tab 
          text = "Updating"
          onClick = { 
            () => router.push("/updating")
          }
        />

        </div>
      </main>
    </div>
  );
}
