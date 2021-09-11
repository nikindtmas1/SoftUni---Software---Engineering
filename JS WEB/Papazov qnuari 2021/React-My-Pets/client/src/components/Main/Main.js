
const Main = () => {

    return (

        <div>
            <section class="basic">
                <h1> Welcome to pet my pet!</h1>
            </section>

            <section class="myPet">
                <h3>Name: Pesho</h3>
                <p>Category: Cat</p>
                <p class="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" /></p>
                <p class="description">This is my cat Pesho</p>
                <div class="pet-info">
                    <a href="#"><button class="button">Edit</button></a>
                    <a href="#"><button class="button">Delete</button></a>
                    <i class="fas fa-heart"></i> <span>5</span>
                </div>
            </section>

            <style jsx>
                {`
                .fa-heart {
                    color: red;
                }
                .basic h1,
                .my-pets h1,
                .dashboard h1 {
                    text-align: center;
                    margin: 0rem;
                    padding: 2rem 0 1rem 0;
                }
                
                .detailsMyPet>p:nth-child(2),
                .deletePet>p:nth-child(2),
                .otherPet>p:nth-child(2),
                .myPet>p:nth-child(2) {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                
                .detailsOtherPet,
                .detailsMyPet,
                .deletePet,
                .otherPet,
                .myPet {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }



                .basic h1,
                .my-pets h1,
                .dashboard h1 {
                    text-align: center;
                    margin: 0rem;
                    padding: 2rem 0 1rem 0;
                }

                h3 {
                    margin-bottom: 0;
                }

                .pet-info {
                    padding-bottom: 1rem;
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
        </div>

    )

}

export default Main;