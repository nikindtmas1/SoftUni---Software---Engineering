import Hello from "./Hello";
import Welcome from "./Welcome";

export default function Header(){

    return (
        <header className="App-header">
            <Hello />
            <Welcome />

        </header>
    );
}