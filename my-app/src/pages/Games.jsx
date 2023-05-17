import Game1 from "../images/Games/Game1.png";
import Game2 from "../images/Games/Game2.png";
import Game3 from "../images/Games/Game3.png";

function Games() {
  return (
    <div className="Games-main">
      <div className="games-heading">
        <h1>GAMES</h1>
      </div>
      <div className="games-heading-border"></div>

      <div className="games-main-body">
        <div className="games-first-line">

           <a href="https://www.coolmathgames.com/0-hangman" rel="hangman">
          <div className="first-game-container">
            <p>Hangman</p>

            <img src={Game1} alt="" />
          </div>
             </a>

             <a href="https://www.bbc.co.uk/bitesize/articles/zdjkjfr" rel="mathsgame">
          <div className="second-game-container">
            <p>math game</p>

            <img src={Game2} alt="" />
          </div>
          
          </a>
        </div>

        <div className="games-second-line">

        <a href="https://www.mathplayground.com/logic-games.html" rel="logic">
          <div className="third-game-container">
            <p>logic</p>

            <img src={Game3} alt="" />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Games;
