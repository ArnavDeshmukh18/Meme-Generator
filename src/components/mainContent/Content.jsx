import React from "react";
import "./Content.css";
function Content() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
    console.log(event.target.value);
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
      <button className="form-button" >Get New Meme Image</button>
    </div>
  );
}

export default Content;
