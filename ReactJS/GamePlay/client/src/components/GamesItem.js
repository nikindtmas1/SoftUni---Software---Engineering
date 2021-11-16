
const GamesItem = (props) => {

    return (
        <div class="allGames-info">
            <img src={props.imageUrl} />
            <h6>{props.title}</h6>
            <h2>{props.category}</h2>
            <a href="#" class="details-button">Details</a>
          </div>
    );
};

export default GamesItem;