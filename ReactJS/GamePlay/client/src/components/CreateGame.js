import {useState, useEffect} from 'react';
import * as gameService from '../services/gameService';


const CreateGame
 = () => {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [maxLevel, setMaxLevel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [summary, setSummary] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onCategoryChange = e => setCategory(e.target.value);
  const onMaxLevelChange = e => setMaxLevel(e.target.value);
  const onImageUrlChange = e => setImageUrl(e.target.value);
  const onSummaryChange = e => setSummary(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, category, maxLevel, imageUrl, summary };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    
      gameService.create(requestOptions)
      .then(res => res.redirect('/games'));
  };

    return (
        <section id="create-page" class="auth">
          <form id="create">
            <div class="container">

              <h1>Create Game</h1>
              <label for="leg-title">Legendary title:</label>
              <input onChange={onTitleChange} type="text" id="title" name="title" placeholder="Enter game title..." value={title} />

              <label for="category">Category:</label>
              <input onChange={onCategoryChange} type="text" id="category" name="category" placeholder="Enter game category..." value={category} />

              <label for="levels">MaxLevel:</label>
              <input onChange={onMaxLevelChange} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" value={maxLevel} />

              <label for="game-img">Image:</label>
              <input onChange={onImageUrlChange} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={imageUrl} />

              <label for="summary">Summary:</label>
              <textarea onChange={onSummaryChange} name="summary" id="summary" value={summary}>{summary}</textarea>
              <input onClick={handleSubmit} class="btn submit" type="submit" value="Create Game" />
            </div>
          </form>
        </section>
    );
};

export default CreateGame
;