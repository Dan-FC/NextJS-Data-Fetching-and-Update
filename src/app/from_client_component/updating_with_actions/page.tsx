"use client";

import styles from "../fetching/page.module.css";
import { useRouter } from "next/navigation";
//! new hook just droped
import { useActionState } from "react";

import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { createNewUserAction } from "@/actions/form_actions/createNewUser";

export default function ClientWithActions() {
  const router = useRouter();
  
  /**
   * Nosotros decidimos que la mejor manera de usar y entender este hook es así:
   * 1. agregas message o state para ver el estado de la acción:
   * (terminó | error | funcionó)
   * 2. agregas la nueva action, que es ahora la action que pondrás en el form
   * 3. agregas isPending que es el estado pendiente mientras se hace la action
   * 4. finalmente al hook agregas tu server action y tu estado inicial
   *    nuestros estados son texto
   * */
  const [message, formAction, isPending] = useActionState(createNewUserAction, null)

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
            size="small"
            onClick={
              () => router.back()
            }
            text = "Go Back"
            loading = {false}
          />
          <form className={styles.form_container} action={formAction}>
            <input type="text" name="name" className={styles.form_input} required />
            <input type="text" name="password" className={styles.form_input} required />
            <input type="text" name="role" className={styles.form_input} required />
            <button type="submit" className={styles.form_button}>
              Create a New User with Actions
            </button>
          </form>
          <p className={styles.titleResponse}>Response:</p>
          {isPending ? <p>"Sending Data"</p> : <></>}
          <p>{message}</p>
        </div>
      </main>
    </div>
  );
}
