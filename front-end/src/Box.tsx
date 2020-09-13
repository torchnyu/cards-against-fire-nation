import React from "react"
import { createUseStyles } from "react-jss";
import background from "./fn2.svg";
interface Props {
  name: string,
  type: string
}

const useStyles = createUseStyles({
  div:{
    pageBreakInside: "avoid",
    backgroundImage: `url(${background})`,
    backgroundSize:"3vh",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"left bottom",
    color: "#af210d",
    borderRadius: "10px",
    height: "48.4vh",
    width: "28vh",
    fontFamily:"Helvetica",
    fontWeight:"700",
    margin: "5px",
    fontSize:"3vh",
    border:"1px solid black",
    webkitPrintColorAdjust: "exact",
  },
  questionDiv:{
    backgroundColor:"white",
  },
  answerDiv:{
    backgroundColor:"#af210d",
    color:"white",
  },
  p:{
    paddingLeft:"10px",
    paddingRight:"10px",
  },
});

const Box: React.FC<Props> = ({ name, type }) => {
  const classes= useStyles();
  if (type === "question"){
  return <div className={ classes.questionDiv + " " + classes.div} >
    <p className={ classes.p }> {name} </p>
  </div>
  }
  return <div className={classes.answerDiv +  " " + classes.div} >
    <p className={ classes.p }> {name} </p>
  </div>



}

export default Box;
