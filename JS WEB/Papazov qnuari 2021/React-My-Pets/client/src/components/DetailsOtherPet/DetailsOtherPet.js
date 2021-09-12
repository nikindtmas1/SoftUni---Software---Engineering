

const DetailsOtherPet = () => {

    return(

        <section class="detailsMyPet">
                <h3>Koko</h3>
                <p>Pet counter: <i class="fas fa-heart"></i> 6</p>
                <p class="img"><img src="https://www.freepngimg.com/thumb/parrot/2-parrot-png-images-download-thumb.png"/></p>
                <form action="#" method="POST">
                    <textarea type="text" name="description">This is my parrot Koko</textarea>
                    <button class="button"> Save</button>
                </form>
                <style jsx>
                    {`
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
                    .detailsMyPet textarea,
                    .my-pets textarea {
                        margin-bottom: 2rem;
                    }
                    .deletePet>form,
                    .detailsMyPet>form {
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 1rem;
                    }
                    h3 {
                        margin-bottom: 0;
                    }
                    .fa-heart {
                        color: red;
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
                    .detailsOtherPet,
                    .detailsMyPet,
                    .deletePet,
                    .otherPet,
                    .myPet {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .detailsMyPet>p:nth-child(2),
                    .deletePet>p:nth-child(2),
                    .otherPet>p:nth-child(2),
                    .myPet>p:nth-child(2) {
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    `}
                </style>
            </section>

    )
}

export default DetailsOtherPet;