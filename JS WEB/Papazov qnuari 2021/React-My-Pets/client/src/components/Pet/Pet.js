

const Pet = ({
    name
}) => {

    return(

        <li className="otherPet">
        <h3>Name: {name}</h3>
        <p>Category: Cat</p>
        <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
        <p className="description">This is not my cat Gosho</p>
        <div className="pet-info">
            <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
            <a href="/dashboard/deatails"><button class="button">Details</button></a>
            <i className="fas fa-heart"></i> <span> 2</span>
        </div>
    </li>

    )
}

export default Pet;