import { useState } from "react";

const FavoritColor = () => {

    const [color, setColor] = useState('red');
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>My favorite color is {color}!</h1>
        <button type='button'
        onClick={() => setColor('blue')}
        >Blue</button>

        <button
        type='button'
        onClick={() => setColor('red')}
        >Red</button>
        <h1>My count number is {count}!</h1>
        <button
        type='button'
        onClick={() => setCount((count) => count + 1)}
        >Counter</button>
        </>
    );
};

export default FavoritColor;