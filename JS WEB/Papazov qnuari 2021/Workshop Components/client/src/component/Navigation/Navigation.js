import { Component } from "react";
import styles from './Navigation.module.css'

class Navigation extends Component{
    render(){
        return(
            <nav className={styles.Navigation}>
                <ul>
                    <li className={styles.listItem}>
                        <a href='#'>Going to 1 </a>
                        <a href='#'>Going to 2 </a>
                        <a href='#'>Going to 3 </a>
                        <a href='#'>Going to 4 </a>
                        <a href='#'>Going to 5 </a>
                        <a href='#'>Going to 6 </a>
                    </li>

                </ul>
            </nav>
           
        )
    }
}

export default Navigation;