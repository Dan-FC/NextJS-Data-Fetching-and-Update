"use client";

import styles from "./page.module.css";

import { postSportAction } from "@/actions/postSportAction";

export default function UpdateWActions() {
    //* este chequeo ya no es optimo cuando usamos actions
    // //const [isLoading, setLoading] = useState(false);

    //* Utilizamos mejor el hook de useActionState docs = https://react.dev/reference/react/useActionState
    //const [state, formAction, pending] = useActionState(postSportAction, null)
    //! Pero no hay ejemplos de uso suficientes
    return (
        <div className={styles.container}>
            <form action={postSportAction}>
                <input type="text" name="sport_name" />
                <button type="submit">Create Sport</button>
            </form>
            <br />
            <br />
            <p className={styles.data}>
            </p>
        </div>
    );
}