import { Component } from "react";
import styles from './Aside.module.css';

class Aside extends Component{

    render(){

        return (

            <aside className={styles.Aside}>
                <ul>
                    <li className={styles.listItem}>Going to 1</li>
                    <li>Going to 2</li>
                    <li>Going to 3</li>
                    <li>Going to 4</li>
                    <li>Going to 5</li>
                    <li>Going to 6</li>
                    <li>Going to 7</li>
                    <li>Going to 8</li>
                    <li>Going to 9</li>
                </ul>
            </aside>
        )
    }
}

export default Aside;