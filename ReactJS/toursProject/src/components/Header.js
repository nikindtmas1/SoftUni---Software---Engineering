import Hello from "./Hello";
import Welcome from "./Welcome";

export default function Header(){

    return (
        // <header className="App-header">
        //     <Hello />
        //     <Welcome />

        // </header>

        <header id="home">
        <div class="overlay">
            <div class="container">
                <div>
                    <h1><span>Amazing</span><br />Santorini 10 Days Tour</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                    <button><a href="#" class="text-uppercase">book now</a></button>
                </div>
            </div>
        </div>
    </header>
    );
}