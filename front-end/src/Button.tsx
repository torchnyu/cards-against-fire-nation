import React from "react"
import { createUseStyles } from "react-jss";

interface Props {
  name: string
}

const useStyles = createUseStyles({
  button:{
    fontSize:"2rem",
    fontFamily:"Courier New",

    backgroundColor:"#969595",
    color: "black",
    borderRadius: "7px",
    "&:hover":{
        filter: "brightness(75%)",
    },
  },
});

const Button: React.FC<Props> = ({ name }) => {
  const classes= useStyles();

  return <button className={classes.button} >
    {name}
  </button>
}

export default Button;