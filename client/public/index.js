"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var fa_1 = require("react-icons/fa");
var material_table_1 = __importDefault(require("material-table"));
var react_2 = require("react");
var AddBox_1 = __importDefault(require("@material-ui/icons/AddBox"));
var ArrowDownward_1 = __importDefault(require("@material-ui/icons/ArrowDownward"));
var Check_1 = __importDefault(require("@material-ui/icons/Check"));
var ChevronLeft_1 = __importDefault(require("@material-ui/icons/ChevronLeft"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var Clear_1 = __importDefault(require("@material-ui/icons/Clear"));
var DeleteOutline_1 = __importDefault(require("@material-ui/icons/DeleteOutline"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var FilterList_1 = __importDefault(require("@material-ui/icons/FilterList"));
var FirstPage_1 = __importDefault(require("@material-ui/icons/FirstPage"));
var LastPage_1 = __importDefault(require("@material-ui/icons/LastPage"));
var Remove_1 = __importDefault(require("@material-ui/icons/Remove"));
var SaveAlt_1 = __importDefault(require("@material-ui/icons/SaveAlt"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var ViewColumn_1 = __importDefault(require("@material-ui/icons/ViewColumn"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var react_is_1 = require("react-is");
var EditIcon = Edit_1.default;
var DeleteIcon = Delete_1.default;
var gitIcon = fa_1.FaGithub;
var iconComponentByTableIconType = {
    Add: AddBox_1.default,
    Check: Check_1.default,
    Clear: Clear_1.default,
    Delete: DeleteOutline_1.default,
    DetailPanel: ChevronRight_1.default,
    Edit: Edit_1.default,
    Export: SaveAlt_1.default,
    Filter: FilterList_1.default,
    FirstPage: FirstPage_1.default,
    LastPage: LastPage_1.default,
    NextPage: ChevronRight_1.default,
    PreviousPage: ChevronLeft_1.default,
    ResetSearch: Clear_1.default,
    Search: Search_1.default,
    SortArrow: ArrowDownward_1.default,
    ThirdStateCheck: Remove_1.default,
    ViewColumn: ViewColumn_1.default,
    Retry: AddBox_1.default,
};
var tableIcons = Object.entries(iconComponentByTableIconType).reduce(function (currentTableIcons, _a) {
    var tableIconType = _a[0], IconComponent = _a[1];
    currentTableIcons[tableIconType] = (0, react_2.forwardRef)(function (props, ref) { return (react_1.default.createElement(IconComponent, __assign({}, props, { ref: ref }))); });
    return currentTableIcons;
}, {});
function createRow(salvation, financial, time, mental, immediacy, happiness, sustainable) {
    return { salvation: salvation, financial: financial, time: time, mental: mental, immediacy: immediacy, happiness: happiness, sustainable: sustainable };
}
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "home" },
            react_1.default.createElement("h1", null, "\u6551\u3044Bot"),
            react_1.default.createElement(material_table_1.default, { icons: tableIcons, title: "\u6551\u3044", columns: [
                    { title: "救い", field: "salvation", type: "string" },
                    { title: "金銭", field: "financial", type: "numeric" },
                    { title: "時間", field: "time", type: "numeric" },
                    { title: "精神", field: "mental", type: "numeric" },
                    { title: "即効性", field: "immediacy", type: "numeric" },
                    { title: "持続性", field: "sustainable", type: "numeric" },
                    { title: "幸福度", field: "happiness", type: "numeric" },
                ], data: [
                    createRow("AKIBAスモーカーズ", 10, 10, 10, 10, 10, 1),
                    createRow("呪術廻戦", 10, 10, 10, 10, 10, 2),
                    createRow("焼肉", 10, 10, 10, 10, 10, 3),
                    createRow("寿司", 10, 10, 10, 10, 10, 4),
                    createRow("VRChat", 10, 10, 10, 10, 10, 5),
                    createRow("虐殺機関", 10, 10, 10, 10, 10, 7),
                    createRow("最強のふたり", 10, 10, 10, 10, 10, 6),
                    createRow("アルコール", 10, 10, 10, 10, 10, 9),
                ], options: {
                    sorting: true,
                    headerStyle: {
                        backgroundColor: "#01579b",
                        color: "#FFF",
                    },
                    rowStyle: {
                        fontFamily: "sans-serif",
                        fontSize: 15,
                    }
                }, actions: [
                    {
                        icon: DeleteIcon,
                        tooltip: '削除',
                        onClick: function (event, rowData) { return alert("delete"); }
                    },
                    {
                        icon: EditIcon,
                        tooltip: '編集',
                        onClick: function (event, rowData) {
                            console.log(rowData.time);
                            console.log((0, react_is_1.typeOf)(rowData));
                        }
                    }
                ], onRowClick: function (event, rowData) { return console.log("hoge"); } })),
        react_1.default.createElement("div", { className: "links" },
            react_1.default.createElement("h2", null, "Link"),
            react_1.default.createElement("a", { href: "https://github.com/gen0x39/savior-bot" },
                react_1.default.createElement(fa_1.FaGithub, { size: 60, color: '#555' })),
            react_1.default.createElement("a", { href: "https://twitter.com/gen0x39" },
                react_1.default.createElement(fa_1.FaTwitter, { size: 60, color: '#29f' })))));
};
(0, react_dom_1.render)(react_1.default.createElement(App, null), document.getElementById("app"));
