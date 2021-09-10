
const Main = () => {

    return (

        <main id="site-content">
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
                `}
            </style>
        </main>

    )

}

export default Main;