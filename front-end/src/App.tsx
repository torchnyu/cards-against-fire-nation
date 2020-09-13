import React, {useState,useEffect} from 'react';
import { createUseStyles } from "react-jss";
import avatar from "./avatar.png";
import Button  from "./Button";
import Box from "./Box";

const useStyles = createUseStyles({
  App: {
    backgroundImage: `url(${avatar})`,
    backgroundRepeat: "no-repeat",
    height: "90vh",
    overflow: "scroll",
    backgroundSize: "cover",
    fontFamily: "Courier New",
    fontSize: "2rem",
  },
  header: {
    fontFamily: "Courier New",
    fontSize: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: "black",
    color: "#cb3f34",
    height: "5vh",
  },
  footer: {
    fontFamily: "Courier New",
    height: "5vh",
    backgroundColor: "black",
    textAlign: "center",
    color: "#d0732f",
  },
  a: {
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
  select: {
    fontSize: "2rem",
    fontFamily: "Courier New",
    padding: "3px",
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    "&:hover": {
      filter: "brightness(75%)",
    },
  },
  divCards: {
    WebkitPrintColorAdjust: "exact",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    flexWrap: "wrap",
  },
  container: {
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ignore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media print": {
    App: {
      height: "auto",
      overflow: "auto",
    },
    header: {
      display: "none",
    },
    ignore: {
      display: "none",
    },
    footer: {
      display: "none",
    },
    "@page": {
      size: "landscape",
    },
  },
});

function App() {
  const classes = useStyles();
  const numCards = [4, 5, 6, 7, 8];
  const [allNouns, setAllNouns] = useState([]);
  const [allSentences, setAllSentences] = useState([]);
  const [whiteCards, setWhiteCards] = useState(4);
  const [gameNouns, setGameNouns] = useState<string[]>([]);
  const [gameSentences, setGameSentences] = useState<string[]>([]);

  const result = async () => {
    const data = await fetch("/final_form.json");
    const courses = await data.json();
    setAllNouns(courses["nouns"]);
    setAllSentences(courses["sentences"]);
    return;
  };

  useEffect(() => {
    result();
  }, []);

  function generateCards() {
    let index = 0;

    const listOfNouns: string[] = [];
    const listOfSentences: string[] = [];

    for (let i = 0; i < whiteCards; i++) {
      index = getRandomNumber(allSentences.length);
      let sentence = "" + allSentences[index];
      while (sentence.length > 130) {
        index = getRandomNumber(allSentences.length);
        sentence = "" + allSentences[index];
      }
      sentence = sentence.replace("dogge", "_______");
      listOfSentences.push(sentence);
    }
    setGameSentences(listOfSentences);

    for (let i = 0; i < whiteCards * 5; i++) {
      index = getRandomNumber(allNouns.length);
      let newNoun = allNouns[index];
      listOfNouns.push(newNoun);
    }
    setGameNouns(listOfNouns);
  }

  function getRandomNumber(size: number) {
    return Math.floor(Math.random() * size);
  }

  function handleCardNum(event: any) {
    event.preventDefault();
    setWhiteCards(event.target.value);
  }

  return (
    <div>
      <header className={classes.header}>
        Cards Against the Fire Nation
      </header>
      <div className={classes.App}>
        <div className={classes.ignore}>
          <div className={classes.container}>
            Choose the number of White Cards:
            <select className={classes.select} onChange={handleCardNum}>
              {numCards.map((num) => {
                return (
                  <option key={num} value={num}>
                    {num}
                  </option>
                );
              })}
            </select>
          </div>
          <Button name="Generate Cards" onClick={generateCards}>
          </Button>
          <Button name="Print" onClick={window.print}>
          </Button>
        </div>
        <div className={classes.divCards}>
          {gameSentences.map((sentence) => {
            return <Box name={sentence} type="question"></Box>;
          })}
          {gameNouns.map((noun) => {
            return <Box name={noun} type="answer"></Box>;
          })}
        </div>
      </div>
      <footer className={classes.footer}>
        A
        <a
          className={classes.a}
          href="https://spark.torchnyu.com/"
          target="blank"
        >
          Spark
        </a>
        y Sparky Boom Boom Project
      </footer>
    </div>
  );
}

export default App;
