"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import useSWR, {Fetcher} from "swr";
import { User } from "@/types/User"

import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { DataContainer } from "@/components/DataContainer/DataContainer";

export default function ClientFetching() {
  const router = useRouter();
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "";

  //! useSWR no se puede utilizar en un server component porque usa estados
  
  /**
   * @param Fetcher<User[]> utilizamos el tipo de dato Fetcher para despues--
   * despues especificar la respuesta que recibiremos
   * @param url se refiere a url de la api
   * @returns un arreglo de Usuarios despues de ser parseado con json()
   */
  const fetcher: Fetcher<User[]> = (url: string) => fetch(url).then(res => res.json());
  const { data, isLoading, error, mutate } = useSWR(apiURL + "/users", fetcher);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Title
              text="Fetching (Client):"
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
          <Button
            text= "Refresh"
            onClick={
              () => mutate()
            }
            loading = {false}
            size="small"
          />
          <div className={styles.dataContainer}>
            {isLoading ? (<div>Loading...</div>) : <></>}
            {error ? (<div>Error loading data</div>) : <></>}
            {/* Si hay data mostrarla  */}
            {data ? (<DataContainer users={data} />) : <></>}
          </div>
        </div>
      </main>
    </div>
  );
}
