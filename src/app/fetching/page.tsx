"use client";

import useSWR from "swr";
import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

const fetcher = async (url: string) => {
    const res = await fetch(url, { method: "GET" });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error: ${res.status} - ${text}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
        const text = await res.text();
        throw new Error("Expected JSON but got: " + text.slice(0, 100));
    }

    return res.json();
};

export default function Fetching() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [shouldFetch, setShouldFetch] = useState(false);

    const { data, error, isLoading, mutate } = useSWR(
        shouldFetch ? apiUrl : null,
        fetcher
    );

    const handleClick = () => {
        if (!shouldFetch) setShouldFetch(true);
        else mutate();
    };

    return (
        <div className={styles.container}>
            <Button
                onClick={handleClick}
                text="Fetch Data"
                loading={isLoading}
                size="small"
            />
            <br />
            <br />
            <p className={styles.data}>
                {data ? JSON.stringify(data, null, 2) : ""}
            </p>
            {error && <p>Error: {error.message}</p>}
            {isLoading && <p>Cargando...</p>}
        </div>
    );
}
