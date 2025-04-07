import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
    text : string
}

export const Title = ( props : TitleProps ) => {
    return(
        <>
            <div className = {styles.container}>
                <p className = {styles.text}>{props.text}</p>
            </div>
        </>
    )
}