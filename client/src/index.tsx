import React, { useState } from "react";
import { render } from "react-dom";
import { FaGithub, FaTwitter } from "react-icons/fa"
import MaterialTable, { Icons } from "material-table";

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
import Description from "@material-ui/icons/Description";

const DescriptionIcon: any = Description

interface TableRow {
  salvation: string;
  financial: number;
  time: number;
  mental: number;
  sustainable: number;
  happiness: number;
}

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

const App = () => {
  const [columns, setColumns] = useState([
    { title: "救い", field: "salvation", type: "string" },
    { title: "費用", field: "financial", type: "numeric" },
    { title: "時間", field: "time", type: "numeric" },
    { title: "精神", field: "mental", type: "numeric" },
    { title: "即効性", field: "immediacy", type: "numeric" },
    { title: "持続性", field: "sustainable", type: "numeric" },
    { title: "幸福度", field: "happiness", type: "numeric" },
  ]);

  const [data, setData] = useState([
    { salvation:"AKIBAスモーカーズ", financial:3, time:2, mental:1, immediacy:8, sustainable:4, happiness:7 },
    { salvation:"虐殺機関", financial:10, time:2, mental:8, immediacy:1, sustainable:8, happiness:6 },
    { salvation:"寿司", financial:1, time:1, mental:5, immediacy:10, sustainable:3, happiness:10 },
    { salvation:"旅行", financial:1, time:1, mental:1, immediacy:1, sustainable:10, happiness:10 },
    { salvation:"薬", financial:5, time:3, mental:3, immediacy:1, sustainable:4, happiness:5 },
    { salvation:"酒", financial:7, time:1, mental:3, immediacy:8, sustainable:5, happiness:4 },
  ]);
  
  return (
    <div>
      <div className="home">
          <h1>救いBot</h1>
          <MaterialTable
          icons={tableIcons}
          title="救い"
          columns={[
            { title: "救い", field: "salvation", type: "string" },
            { title: "費用", field: "financial", type: "numeric" },
            { title: "時間", field: "time", type: "numeric" },
            { title: "精神", field: "mental", type: "numeric" },
            { title: "即効性", field: "immediacy", type: "numeric" },
            { title: "持続性", field: "sustainable", type: "numeric" },
            { title: "幸福度", field: "happiness", type: "numeric" },
          ]}
          data={data}
          editable={{
            onBulkUpdate: changes =>
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                resolve();
              }, 1000);
            }), 
            onRowAdd: newData =>
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = 0;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  resolve()
              }, 1000)
            }),
          }}
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
              icon: DescriptionIcon,
              tooltip: 'Make .md file',
              onClick: (event, rowData) => {
                alert("詳細を.mdで編集できるようにする．")
              }
            }
          ]}
          onRowClick={(event, rowData) => console.log("hoge")}
        />
      </div>
      <div className="links">
        <h2>Link</h2>
        <a href="https://github.com/gen0x39/savior-bot">
          <FaGithub size={50} color={'#555'}/>
        </a>
        <a href="https://twitter.com/gen0x39">
          <FaTwitter size={50} color={'#29f'}/>
        </a>
      </div>
    </div>
  )
}

render(<App />, document.getElementById("app"));