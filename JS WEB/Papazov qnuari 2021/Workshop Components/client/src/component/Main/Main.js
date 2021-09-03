import { Component } from "react";
import styles from './Main.module.css';

class Main extends Component{

    render(posts){

        return(
          
            <main className='main-container'>
                <h1 className={styles.h1}>Main Component</h1>
                {posts.map(x => 
                <p>{x.content}</p>
                    
                    )}
            </main>
        )
    }

}

export default Main;