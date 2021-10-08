"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var fa_1 = require("react-icons/fa");
var material_table_1 = __importDefault(require("material-table"));
function createRow(salvation, financial, time, mental, immediacy, happiness, sustainable) {
    return { salvation: salvation, financial: financial, time: time, mental: mental, immediacy: immediacy, happiness: happiness, sustainable: sustainable };
}
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "home" },
            react_1.default.createElement("h1", null, "Hello World!"),
            react_1.default.createElement("h2", null, "Icons"),
            react_1.default.createElement(fa_1.FaTrash, { size: 30, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaPen, { size: 30, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaSortAlphaDown, { size: 30, color: '#ccc' }),
            react_1.default.createElement(fa_1.FaSortNumericDownAlt, { size: 30, color: '#ccc' }),
            react_1.default.createElement(material_table_1.default, { title: "\u6551\u3044", columns: [
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
                ] })),
        react_1.default.createElement("div", { className: "links" },
            react_1.default.createElement("h2", null, "Link"),
            react_1.default.createElement("a", { href: "https://github.com/gen0x39/savior-bot" },
                react_1.default.createElement(fa_1.FaGithub, { size: 60, color: '#ccc' })),
            react_1.default.createElement("a", { href: "https://twitter.com/gen0x39" },
                react_1.default.createElement(fa_1.FaTwitter, { size: 60, color: '#ccc' })))));
};
(0, react_dom_1.render)(react_1.default.createElement(App, null), document.getElementById("app"));
