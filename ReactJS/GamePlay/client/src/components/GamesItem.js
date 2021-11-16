
const GamesItem = ({ 
    game,
    navigationChangeHandler
    }) => {

    const onDetailsClick = (e) => {
        e.preventDefault()
        navigationChangeHandler(`/details/${game._id}`)
    }

    return (
        <div class="allGames">
            <div class="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <a href={`/details/${game._id}`} onClick={onDetailsClick} class="details-button">Details</a>
            </div>
        </div>

    );
};

export default GamesItem;