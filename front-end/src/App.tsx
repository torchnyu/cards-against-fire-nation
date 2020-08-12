import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { createUseStyles } from "react-jss";
import avatar from "./avatar.png";
import Button  from "./Button";
import Box from "./Box";

const useStyles = createUseStyles({
  App:{
    backgroundImage: `url(${avatar})`,
    height: "90vh",
    overflow:"hidden",
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
    display:"flex",
  }
});
function generateCards(){
  console.log("hi");
  return 0;

}

function App() {
  const classes= useStyles();
  return (
    <div>
      <header className={classes.header}> Cards Against the Fire Nation
      </header>
      <div className={classes.App}>
      <br/>
      <Button name="Generate Cards" >  </Button>
      <br/>
      <div className={classes.divAnswers}>
      <Box name = "The monks always told me _____." type="question"> </Box>
      </div>
      <br/>
      <div className={classes.divAnswers}>
      <Box name = "I would never rise from the shame and humiliation of my defeat" type="answer"> </Box>
      <Box name = "you must look in yourself to save yourself from your other self" type="answer"> </Box>
      <Box name = "that's rough buddy" type="answer"> </Box>
      <Box name = "the pai sho tile was in my sleeve the whole time" type="answer"> </Box>


      </div>
    </div>
    <footer className={classes.footer}> A <a className={classes.a} href="https://spark.torchnyu.com/" target="blank"> Spark</a>y Sparky Boom Boom Project </footer>
  </div>
  );
}

export default App;
