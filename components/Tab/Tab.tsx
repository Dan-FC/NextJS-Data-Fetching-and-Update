import React from "react";
import styles from "./Tab.module.css"

interface TabProps {
    text : string
    onClick : () => void
}

export const Tab = ( props : TabProps) => {
    return (
        <>
            <a onClick={ props.onClick }>
                <div className={styles.container}>
                    <i><p className={styles.text}> { props.text }</p></i>
                </div>
            </a>
        </>
    )
}