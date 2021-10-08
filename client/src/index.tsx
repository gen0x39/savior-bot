import React from "react";
import { render } from "react-dom";
import { FaGithub, FaTrash, FaTwitter, FaPen, FaSortAlphaDown, FaSortNumericDownAlt } from "react-icons/fa"
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';

import MaterialTable from "material-table";


import { useHistory } from 'react-router-dom';



function createRow(salvation: string, financial: number, time: number, mental: number, immediacy: number, happiness: number, sustainable: number) {
  return { salvation, financial, time, mental, immediacy, happiness, sustainable }
}

const App = () => {
  const history = useHistory();

  const plog = () => {
    console.log("onclicked")
  }
  const toTwitter = () => {
    history.push("https://twitter.com/gen0x39")
  }
  return (
    <div>
      <div className="home">
          <h1>Hello World!</h1>
          <h2>Icons</h2>
          <FaTrash size={30} color={'#ccc'} />
          <FaPen size={30} color={'#ccc'} />
          <FaSortAlphaDown size={30} color={'#ccc'} />
          <FaSortNumericDownAlt size={30} color={'#ccc'} />
          <MaterialTable
          title="救い"
          columns={[
            { title: "救い", field: "salvation", type: "string" },
            { title: "金銭", field: "financial", type: "numeric" },
            { title: "時間", field: "time", type: "numeric" },
            { title: "精神", field: "mental", type: "numeric" },
            { title: "即効性", field: "immediacy", type: "numeric" },
            { title: "持続性", field: "sustainable", type: "numeric" },
            { title: "幸福度", field: "happiness", type: "numeric" },
          ]}
          data={[
            createRow("AKIBAスモーカーズ",10,10,10,10,10,1),
            createRow("呪術廻戦",10,10,10,10,10,2),
            createRow("焼肉",10,10,10,10,10,3),
            createRow("寿司",10,10,10,10,10,4),
            createRow("VRChat",10,10,10,10,10,5),
            createRow("虐殺機関",10,10,10,10,10,7),
            createRow("最強のふたり",10,10,10,10,10,6),
            createRow("アルコール",10,10,10,10,10,9),
          ]}
        />
      </div>
      <div className="links">
        <h2>Link</h2>
        <a href="https://github.com/gen0x39/savior-bot">
          <FaGithub size={60} color={'#ccc'}/>
        </a>
        <a href="https://twitter.com/gen0x39">
          <FaTwitter size={60} color={'#ccc'}/>
        </a>
      </div>
    </div>
  )
}

console.log( createRow("b",10,10,10,10,10,10))
console.log(   {
  code: 46000,
  region: "鹿児島県",
  total: 1614000,
  male: 758000,
  female: 856000,
})

render(<App />, document.getElementById("app"));