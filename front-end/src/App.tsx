import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import { createUseStyles } from "react-jss";
import avatar from "./avatar.png";
import Button  from "./Button";
import Box from "./Box";
import fs from "fs";

const useStyles = createUseStyles({
  App:{
    backgroundImage: `url(${avatar})`,
    height: "90vh",
    overflow:"scroll",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    fontFamily:"Courier New",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header:{
    fontSize:"2rem",
    fontFamily:"Courier New",
    display:"flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    backgroundColor:"black",
    color: "#cb3f34",
    height:"5vh",
  },
  footer:{
    fontFamily:"Courier New",
    height:"5vh",
    backgroundColor:"black",
    textAlign:"center",
    color: "#d0732f",
  },
  a:{
    color: "white",
    "&:hover":{
      color:"red",
    },
  },
  p:{
    fontSize: "3rem",
    color:"black",
  },
  divAnswers:{
    WebkitPrintColorAdjust: "exact",
    display:"flex",
    width:"100vw",
    flexWrap:"wrap",
    justifyContent:"center",
  }

});
function generateCards(){
  console.log("hi");
  return 0;

}

function App() {
  const classes= useStyles();
  const [allNouns, setAllNouns] = useState([]);
  const [allSentences, setAllSentences] = useState([]);

  const [gameNouns, setGameNouns] = useState([""]);
  const [gameSentences, setGameSentences] = useState([""]);


  // const data = useState({});
  const result = async () =>{
    const data = await fetch("/final_form.json");
    const courses = await data.json();
    setAllNouns(courses["nouns"]);
    setAllSentences(courses["sentences"]);
    return;
  }

  useEffect(() => {
    result();
  }, []);


  function generateCards(){
      var index = 0;

      const listOfNouns = [""];
      const listOfSentences = [""];

      let i = 0;
      for (i= 0; i <6 ; i++){
        index = getRandomNumber(allSentences.length);
        var sentence = ""+allSentences[index];
        while (sentence.length > 130){
          index = getRandomNumber(allSentences.length);
          sentence = ""+allSentences[index];
        }
        sentence = sentence.replace("dogge", "_______");
        listOfSentences.push(sentence);
      }
      listOfSentences.shift();
      setGameSentences(listOfSentences);

      for (i = 0; i < 24; i++){
        index = getRandomNumber(allNouns.length);
        const newNoun= allNouns[index];
        listOfNouns.push(newNoun);
      }
      listOfNouns.shift();
      setGameNouns(listOfNouns);
  }

  function getRandomNumber(size: number){
    return Math.floor(Math.random() * size);
  }

  return (
    <div>
      <header className={classes.header}> Cards Against the Fire Nation
      </header>
      <div className={classes.App}>
      <br/>
      <Button name="Generate Cards" onClick={generateCards}>  </Button>
      <Button name="Print" onClick={window.print}>  </Button>

      <br/>
      <div className={classes.divAnswers}>

      {gameSentences.map((sentence) => {
                   return (
                     <Box name={sentence} type="question" >
                     </Box>
                   );
                 })}
      </div>
      <br/>
      <div className={classes.divAnswers}>
      {gameNouns.map((noun) => {
                   return (
                     <Box name={noun} type="answer" >
                     </Box>
                   );
                 })}
      </div>
    </div>
    <footer className={classes.footer}> A <a className={classes.a} href="https://spark.torchnyu.com/" target="blank"> Spark</a>y Sparky Boom Boom Project </footer>
  </div>
  );
}

export default App;
