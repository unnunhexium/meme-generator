import React from "react";
import memesData from "../memesData";
import "../styles/Meme.css";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  /**
   * Challenge: Save the random meme URL in state
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form__input" />
        <input type="text" placeholder="Bottom text" className="form__input" />
        <button className="form__button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} />
    </main>
  );
}
