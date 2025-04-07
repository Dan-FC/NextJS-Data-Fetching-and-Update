import React from "react";

import styles from "./DataContainer.module.css"
import { User } from "@/types/User";

interface DataContainerProps {
    users : User[]
}

export const DataContainer = ( props : DataContainerProps) => {
    return(
        <div className={styles.container}>
            <ul className={styles.ul}>
                {props.users.map((user: User) => (
                    <li key={user.id} className={styles.user_item}>
                        <div className="name">{user.name}</div>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </li>                    
                ))}
            </ul>
        </div>
    )
}