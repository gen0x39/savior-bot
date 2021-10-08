"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var fa_1 = require("react-icons/fa");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var material_table_1 = __importDefault(require("material-table"));
function createRow(salation, financial, time, mental, immediacy, happiness, sustainable) {
    return { salation: salation, financial: financial, time: time, mental: mental, immediacy: immediacy, happiness: happiness, sustainable: sustainable };
}
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "home" },
            react_1.default.createElement("h1", null, "Hello World!"),
            react_1.default.createElement("h2", null, "Icons"),
            react_1.default.createElement(fa_1.FaTrash, { size: 100, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaPen, { size: 100, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaSortAlphaDown, { size: 100, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaSortNumericDownAlt, { size: 100, color: '#ccc' }),
            react_1.default.createElement(Button_1.default, { variant: "outlined" }, "Hello World!!"),
            react_1.default.createElement(Table_1.default, null)),
        react_1.default.createElement("div", { className: "links" },
            react_1.default.createElement("h2", null, "Link"),
            react_1.default.createElement(fa_1.FaGithub, { size: 100, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaTwitter, { size: 100, color: '#ccc' })),
        react_1.default.createElement("div", { style: { maxWidth: "80%" } },
            react_1.default.createElement(material_table_1.default, { title: "\u6551\u3044", columns: [
                    { title: "救い", field: "name", type: "string" },
                    { title: "金銭", field: "surname", type: "numeric" },
                    { title: "時間", field: "surname", type: "numeric" },
                    { title: "精神", field: "surname", type: "numeric" },
                    { title: "即効性", field: "surname", type: "numeric" },
                    { title: "持続性", field: "surname", type: "numeric" },
                    { title: "幸福度", field: "surname", type: "numeric" },
                ], data: [
                    createRow("a", 10, 10, 10, 10, 10, 10),
                    createRow("b", 10, 10, 10, 10, 10, 10),
                ] }))));
};
console.log(createRow("b", 10, 10, 10, 10, 10, 10));
console.log({
    code: 46000,
    region: "鹿児島県",
    total: 1614000,
    male: 758000,
    female: 856000,
});
(0, react_dom_1.render)(react_1.default.createElement(App, null), document.getElementById("app"));
