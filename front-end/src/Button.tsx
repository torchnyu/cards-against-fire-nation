import React from "react"
import { createUseStyles } from "react-jss";

interface Props {
  name: string
  onClick: any
}

const useStyles = createUseStyles({
  button:{
    fontSize:"2rem",
    fontFamily:"Courier New",
    padding:"3px",
    backgroundColor:"#E0E0E0",
    color: "black",
    borderRadius: "7px",
    "&:hover":{
        filter: "brightness(75%)",
    },
  },
});

const Button: React.FC<Props> = ({ name, onClick }) => {
  const classes= useStyles();

  return <button className={classes.button} onClick={onClick}>
    {name}
  </button>
}

export default Button;
