import React from "react"
import { createUseStyles } from "react-jss";
import background from "./fn2.svg";
interface Props {
  name: string,
  type: string
}

const useStyles = createUseStyles({
  div:{
    backgroundImage: `url(${background})`,
    backgroundSize:"3vh",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"left bottom",
    color: "#af210d",
    borderRadius: "10px",
    height: "35vh",
    width: "25vh",
    padding: "1vh",
    fontFamily:"Helvetica",
    fontWeight:"700",
    margin: "5px",
    fontSize:"3vh",
    border:"1px solid black",
  },
  questionDiv:{
    backgroundColor:"white",
    webkitPrintColorAdjust: "exact",

  },
  answerDiv:{
    backgroundColor:"#af210d",
    webkitPrintColorAdjust: "exact",

    color:"white",
  },

});

const Box: React.FC<Props> = ({ name, type }) => {
  const classes= useStyles();
  if (type == "question"){
  return <div className={ classes.questionDiv + " " + classes.div} >
    {name}
  </div>
  }
  return <div className={classes.answerDiv +  " " + classes.div} >
    {name}
  </div>



}

export default Box;
