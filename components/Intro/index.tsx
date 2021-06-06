import styles from "./Intro.module.css";
import React from "react";

const Intro: React.FC = () => (
    <>
        <div className={styles.intro}>
            <div className={styles.shortOne}>
                <p className={styles.greeting}>Hi, I’m Théau,</p>
                <p className={styles.myTitle}>
                    a web developer <br />
                </p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:tja.theau54@gmail.com"
                >
                    <button className={styles.helloButton}>Say hello</button>
                </a>
            </div>
            <div className={styles.longOne}>
                <p>
                    I’m a French developer, I’m experienced in{" "}
                    <strong>JS</strong> and <strong>CSS3</strong> and modern
                    libraries <strong>React</strong>, <strong>Node.JS </strong>
                    and <strong>Next.js</strong>.
                </p>
                <p>
                    Currently working for full-time as full-stack dev on
                    nexten.io, a startup from Luxemburg.
                </p>
            </div>
        </div>
        <div className={styles.br}></div>
    </>
);

export default Intro;
