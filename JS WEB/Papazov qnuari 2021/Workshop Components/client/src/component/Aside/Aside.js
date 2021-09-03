import { Component } from "react";
import styles from './Aside.module.css';

class Aside extends Component{

    render(){

        return (

            <aside className={styles.Aside}>
                <ul>
                    <li className={styles.listItem}>Going to 1</li>
                    <li className={styles.listItem}>Going to 2</li>
                    <li className={styles.listItem}>Going to 3</li>
                    <li className={styles.listItem}>Going to 4</li>
                    <li className={styles.listItem}>Going to 5</li>
                    <li className={styles.listItem}>Going to 6</li>
                    <li className={styles.listItem}>Going to 7</li>
                    <li className={styles.listItem}>Going to 8</li>
                    <li className={styles.listItem}>Going to 9</li>
                    <li className={styles.listItem}>Going to 10</li>
                </ul>
            </aside>
        )
    }
}

export default Aside;