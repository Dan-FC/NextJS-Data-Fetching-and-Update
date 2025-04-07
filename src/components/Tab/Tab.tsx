import React from "react";
import styles from "./Tab.module.css"

interface TabProps {
    text : string
    onClick : () => void
    setColor? : "red" | "yellow" | "blue"
}

export const Tab = ( props : TabProps) => {
    return (
        <>
            <a onClick={ props.onClick }>
                <div className={styles.container} style={{ backgroundColor: props.setColor}}>
                    <i><p className={styles.text}> { props.text }</p></i>
                </div>
            </a>
        </>
    )
}