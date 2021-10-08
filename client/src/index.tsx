import React from "react";
import { render } from "react-dom";
import { FaGithub, FaTrash, FaTwitter, FaPen, FaSortAlphaDown, FaSortNumericDownAlt } from "react-icons/fa"
import MaterialTable, { Icons } from "material-table";
import { IconType } from "react-icons/lib";

import { forwardRef, Ref } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import SvgIcon from "@material-ui/core/SvgIcon";
import ViewColumn from "@material-ui/icons/ViewColumn";


import Delete from "@material-ui/icons/Delete";
const EditIcon: any = Edit
const DeleteIcon: any = Delete

const iconComponentByTableIconType: Record<keyof Icons, typeof SvgIcon> = {
  Add: AddBox,
  Check,
  Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage,
  LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  Search: Search,
  SortArrow: ArrowDownward,
  ThirdStateCheck: Remove,
  ViewColumn,
  Retry: AddBox,
};

const tableIcons = Object.entries(iconComponentByTableIconType).reduce(
  (currentTableIcons: Icons, [tableIconType, IconComponent]) => {
    currentTableIcons[
      tableIconType as keyof Icons
    ] = forwardRef((props, ref: Ref<SVGSVGElement>) => (
      <IconComponent {...props} ref={ref} />
    ));
    return currentTableIcons;
  },
  {}
);


function createRow(salvation: string, financial: number, time: number, mental: number, immediacy: number, happiness: number, sustainable: number) {
  return { salvation, financial, time, mental, immediacy, happiness, sustainable }
}


const App = () => {
  return (
    <div>
      <div className="home">
          <h1>救いBot</h1>
          <MaterialTable
          icons={tableIcons}
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
          options={{
            sorting: true,
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF",
            },
            rowStyle: {
              fontFamily: "sans-serif",
              fontSize: 15,
            }
          }}
          actions={[
            {
              icon: DeleteIcon,
              tooltip: 'Save User',
              onClick: (event, rowData) => alert("delete")
            },
            {
              icon: EditIcon,
              tooltip: 'edit data',
              onClick: (event, rowData) => alert("edit")
            }
          ]}
          onRowClick={(event, rowData) => console.log("hoge")}
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

render(<App />, document.getElementById("app"));