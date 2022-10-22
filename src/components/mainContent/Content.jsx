import React from "react";
import "./Content.css";
function Content() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bgw.jpg",
  });

  const [allMemes, setMemes] = React.useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
    console.log(event.target.value);
  }

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemes(data.data.memes);
      console.log(data);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
    console.log(meme.randomImg);
  }

  return (
    <div className="content">
      <input
        type="text"
        className="topLine"
        placeholder="Top Text"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        className="bottomLine"
        placeholder="Bottom Text"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      />
      <button className="form-button" onClick={getMemeImage}>
        Get New Meme Image
      </button>

      <div className="meme">
        <img src={meme.randomImg} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Content;
