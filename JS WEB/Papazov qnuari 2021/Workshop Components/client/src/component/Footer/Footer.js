import { Component } from "react";
import styles from './Footer.module.css';

class Footer extends Component{

    render(){

        return (

            <footer className={styles.Footer}>
                  <ul>
                    <li >
                        <a href='#' className={styles.listItem}>Going to 1 </a>
                        <a href='#' className={styles.listItem}>Going to 2 </a>
                        <a href='#' className={styles.listItem}>Going to 3 </a>
                        <a href='#' className={styles.listItem}>Going to 4 </a>
                        <a href='#' className={styles.listItem}>Going to 5 </a>
                        <a href='#' className={styles.listItem}>Going to 6 </a>
                    </li>

                </ul>
                <p>Software University</p>
            </footer>
        )
    }
}

export default Footer;