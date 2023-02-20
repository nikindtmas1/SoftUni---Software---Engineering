import {useState} from 'react';
import Link from 'next/link';

function Header({title}) {
    return <h1>{title ? title : "Default title"}</h1>
};

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
      };

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>like ({likes})</button>
            <h2>
                <Link href='/login'>Login</Link>
            </h2>
            <h2>
                <Link href='/posts/first-post'>Posts</Link>
            </h2>
        </div>
    );
};

