import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { createUseStyles } from "react-jss";
import avatar from "./avatar.png";
import Button  from "./Button";

const useStyles = createUseStyles({
  App:{
    backgroundImage: `url(${avatar})`,
    height: "90vh",
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
});
function App() {
  const classes= useStyles();
  return (
    <div>
      <header className={classes.header}> Cards Against the Fire Nation
      </header>
      <div className={classes.App}>
      <p className={classes.p}> Welcome! </p>
      <Button name="Generate Cards">  </Button>
    </div>
    <footer className={classes.footer}> A <a className={classes.a} href="https://spark.torchnyu.com/" target="blank"> Spark</a>y Sparky Boom Boom Project </footer>
  </div>
  );
}

export default App;
