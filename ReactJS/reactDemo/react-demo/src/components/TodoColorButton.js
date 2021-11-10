import { useState } from "react";


const FavoritColor = () => {

    const [color, setColor] = useState('red');
    const [count, setCount] = useState(0);
    
    const counter = `My count number is ${count}!`;
    let changeColor = 'red';

    if(count > 2 && count < 5){
        changeColor = 'green'
    }else if(count >= 5){
        changeColor = 'blue'

    }

    const colorHeader = (
        <header>
            <h3>Super color</h3>
            <p>Lorem20</p>
        </header>
    )

    return (
        <>
            <h1 style={{ color: changeColor }}>{counter}</h1>

            { changeColor == 'red' 
                ? colorHeader
                : <h3>Nah</h3>
            }

            <button
                type='button'
                onClick={() => setCount((count) => count + 1)}
            >Counter</button>

            <h1>My favorite color is {color}!</h1>
            <button type='button'
                onClick={() => setColor('blue')}
            >Blue</button>

            <button
                type='button'
                onClick={() => setColor('red')}
            >Red</button>
        </>
    )
    
};

export default FavoritColor;

