"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBarHeader = void 0;
var react_1 = __importDefault(require("react"));
var defaultProps = {};
var InfoBarHeader = function (props) {
    var addr = props.addr, id = props.id, index = props.index;
    return (react_1.default.createElement("div", { style: {
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        } },
        react_1.default.createElement("div", { style: { paddingLeft: '10px' } }, index !== null &&
            react_1.default.createElement("div", { className: "marker car" },
                react_1.default.createElement("span", { className: "marker-content" }, index + 1))),
        react_1.default.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
            } },
            addr,
            react_1.default.createElement("div", { style: { color: 'grey' } },
                id,
                "\uD1B5")),
        react_1.default.createElement("div", null)));
};
exports.InfoBarHeader = InfoBarHeader;
exports.InfoBarHeader.defaultProps = defaultProps;
//# sourceMappingURL=InfoBarHeader.js.map