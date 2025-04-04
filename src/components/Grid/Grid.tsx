import React from "react";
import styles from "./Grid.module.css"

export const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.grid}>
            <div className={styles.grid_item}>
                {children}
            </div>
        </div>
    );
};
