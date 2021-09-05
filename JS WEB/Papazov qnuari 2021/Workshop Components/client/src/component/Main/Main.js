import { Component } from "react";
import styles from './Main.module.css';

const Main = () => {

    return (

        <main className={styles.Main}>
            
            <h1>Soooooome Heading</h1>
            <p>Some posts</p>

        </main>

    )

}

// class Main extends Component{

//     render(posts){

//         return(
          
//             <main className='Main'>
//                 <h1 className={styles.h1}>Main Component</h1>
               
//             </main>

            
//         )
//     }

// }

export default Main;

// {posts.map(x => <p key={x._id}>{x.content}</p>)}