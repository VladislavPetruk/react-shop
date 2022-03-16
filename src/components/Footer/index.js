import React from 'react';
import styles from "./Footer.module.scss";
import stylesMain from "./../../index.module.scss";


export default function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <p className={`${stylesMain.centered} ${styles.footer__text}`}>Copyright © 2022 All Rights Reserved.</p>
        </footer>
        <div className={styles.overlay}></div>
    </>
  )
}
