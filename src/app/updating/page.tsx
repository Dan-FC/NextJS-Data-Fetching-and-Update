"use client";
import { useState } from "react";

import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";


export default function Updating() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleClick = async () => {
        try {
            if (!apiUrl) {
                console.error("API URL is not defined in environment variables.");
                return;
            }

            setLoading(true);
            const res = await fetch(apiUrl + "/sports", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: "Voleiball" }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error("Something went wrong: " + errorText);
            }

            const data = await res.json();
            setMessage(data.message || "Success!");

        } catch (error) {
            console.error("Error fetching sports data:", error);
            setMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <Button
                onClick={handleClick}
                text="Update"
                loading={isLoading}
                size="small"
            />
            <br />
            <br />
            <p className={styles.data}>
                {message && message}
            </p>
            {isLoading && <p>Cargando...</p>}
        </div>
    );
}
