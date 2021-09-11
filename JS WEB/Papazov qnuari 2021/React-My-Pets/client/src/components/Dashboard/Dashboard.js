

const Dashboard = () => {

    return (

        <section class="dashboard">
                <h1>Dashboard</h1>
                <nav class="navbar">
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Cats</a></li>
                        <li><a href="#">Dogs</a></li>
                        <li><a href="#">Parrots</a></li>
                        <li><a href="#">Reptiles</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </nav>
                <ul class="other-pets-list">
                    <li class="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p class="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                            <i class="fas fa-heart"></i> <span> 2</span>
                        </div>
                    </li>
                    <li class="otherPet">
                        <h3>Name: Gosho</h3>
                        <p>Category: Cat</p>
                        <p class="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
                        <p class="description">This is not my cat Gosho</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                            <i class="fas fa-heart"></i> <span> 2</span>
                        </div>

                    </li>
                    <li class="otherPet">
                        <h3>Name: Kiro</h3>
                        <p>Category: Dog</p>
                        <p class="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png"/></p>
                        <p class="description">This is my dog Kiro</p>
                        <div class="pet-info">
                            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
                            <a href="#"><button class="button">Details</button></a>
                            <i class="fas fa-heart"></i> <span> 4</span>
                        </div>
                    </li>
                </ul>

                <style jsx>
                    {`

.fa-heart {
    color: red;
}
                    .detailsMyPet>p:nth-child(2),
                    .deletePet>p:nth-child(2),
                    .otherPet>p:nth-child(2),
                    .myPet>p:nth-child(2) {
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    .dashboard>nav>ul {
                        display: flex;
                    
                    }
                    
                    .dashboard>nav>ul li:not(:last-child) {
                        padding-right: 1rem;
                    }
                    
                    .dashboard .navbar {
                        justify-content: center;
                    }

                    .basic h1,
                    .my-pets h1,
                    .dashboard h1 {
                        text-align: center;
                        margin: 0rem;
                        padding: 2rem 0 1rem 0;
                    }
                    .img {
                        width: 15rem;
                        position: relative;
                        overflow: hidden;
                        padding: 0rem;
                    }
                    
                    img {
                        display: block;
                        position: absolute;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    
                    .img::after {
                        display: block;
                        content: "";
                        padding-top: 100%;
                    }

                    .button {
                        display: block;
                        padding: 0.6rem 1rem;
                        border-radius: 0.4rem;
                        text-decoration: none;
                        font-weight: bold;
                        background: cadetblue;
                        color: rgb(255, 255, 255);
                        border: none;
                        font-size: 1rem;
                    
                    }
                    `}
                </style>
            </section>

    )
}

export default Dashboard;