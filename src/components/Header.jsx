import "@/styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img
          src="src/images/troll-face.svg"
          alt="logo"
          className="header__logo"
        />
        <h2 className="header__title">Meme Generator</h2>
      </div>
      <h3 className="header__subtitle">React Course - Project 3</h3>
    </header>
  );
}
