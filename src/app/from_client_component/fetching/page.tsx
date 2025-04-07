"use client";
//! Usando hook useSWR
import useSWR from "swr";
import styles from "./page.module.css";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

//* Nos pide crear un fetcher
const fetcher = async (url: string) => {
    const res = await fetch(url + "/sports", { method: "GET" });

    if (!res.ok) {
        const text = await res.text();
        //! se utiliza throw
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
    //? Opcional crear un useState o if para ver s tu url esta en las envs
    const [shouldFetch, setShouldFetch] = useState(false);

    //! construimos el hook de SWR que tiene por predeterminado 
    //* los atributos data, error, isLoading
    //* mutate es una función que ejecutará nuestro hook
    const { data, error, isLoading, mutate } = useSWR(
        shouldFetch ? apiUrl : null, //! si esta la url, ponla
        fetcher //! usar la funcion fetcher
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
