"use client";

import styles from "./page.module.css";
import { getSportsAction } from "@/actions/getSportsAction";
import { Button } from "@/components/Button/Button";
import { useState } from "react";


export default function FetchingWActions() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [isLoading, setLoading] = useState(false);
    const [sports, setSports] = useState<any>(null);

    const handleClick = async () => {
        try {
            if (!apiUrl) {
                console.error("API URL is not defined in environment variables.");
                return;
            }
            setLoading(true);
                    
            const data = await getSportsAction(apiUrl);
            setSports(data);
        } catch (error) {
            console.error("Error fetching sports data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <Button
                onClick={ handleClick }
                text="Fetch Data using Action"
                loading={isLoading}
                size="small"
            />
            <br />
            <br />
            <p className={styles.data}>
                {sports ? JSON.stringify(sports, null, 2) : ""}
            </p>
            {isLoading && <p>Cargando...</p>}
        </div>
    );
}
