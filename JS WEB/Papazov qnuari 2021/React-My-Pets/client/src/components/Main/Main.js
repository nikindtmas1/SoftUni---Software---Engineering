
const Main = () => {

    return (

        <div>
            <section class="basic">
                <h1> Welcome to pet my pet!</h1>
            </section>

           

            <style jsx>
                {`
                .basic {
                    background: linear-gradient(rgba(250, 248, 248, 0.2), rgba(25, 167, 173, 0.2)), url(../img/We-need-to-talk-about-pets.jpg) no-repeat center;
                    background-size: cover;
                    height: 85vh;
                    position: relative;
                    overflow: hidden;
                }
               
                .basic h1,
                .my-pets h1,
                .dashboard h1 {
                    text-align: center;
                    margin: 0rem;
                    padding: 2rem 0 1rem 0;
                }

               



                .basic h1,
                .my-pets h1,
                .dashboard h1 {
                    text-align: center;
                    margin: 0rem;
                    padding: 2rem 0 1rem 0;
                }

               

               
                `}
            </style>
        </div>

    )

}

export default Main;