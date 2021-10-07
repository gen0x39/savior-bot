import React from "react";
import { render } from "react-dom";
import { FaGithub, FaTrash, FaTwitter, FaPen, FaSortAlphaDown, FaSortNumericDownAlt } from "react-icons/fa"

const App = () => {
  return (
    <div>
      <div className="home">
          <h1>Hello World!</h1>
          <h2>Icons</h2>
          <FaTrash size={100} color={'#ccc'} />
          <FaPen size={100} color={'#ccc'} />
          <FaSortAlphaDown size={100} color={'#ccc'} />
          <FaSortNumericDownAlt size={100} color={'#ccc'} />
      </div>
      <div className="links">
        <h2>Link</h2>
        <FaGithub size={100} color={'#ccc'} />
        <FaTwitter size={100} color={'#ccc'} />
      </div>
    </div>
  )
}

render(<App />, document.getElementById("app"));