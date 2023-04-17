import ColabLogo from './ColabLogo';
import ColorSlider from './ColorSlider';
import styles from './ComponentStyles/HomePageHeader.module.css';
import { useEffect, useState, useRef } from "react";

export default function HomePageHeader() {

  return (
    <header className={styles.pageHeader}>

        <div className={styles.headerContainer}>

            <div className={styles.logoContainer}>

            </div>

        </div>

        <ColorSlider/>

    </header>
  )
}