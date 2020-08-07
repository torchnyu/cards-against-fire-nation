import React from "react"

interface Props {
  name: string
}

const Box: React.FC<Props> = ({ name }) => {
  return <div>
    {name}
  </div>
}

export default Box;