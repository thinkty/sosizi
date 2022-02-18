"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBarFooter = void 0;
var react_1 = __importStar(require("react"));
var defaultProps = {};
var InfoBarFooter = function (props) {
    var numberOfPics = props.numberOfPics, openModal = props.openModal;
    var _a = (0, react_1.useState)(false), hovering = _a[0], setHover = _a[1];
    return (react_1.default.createElement("div", { onMouseEnter: function () { setHover(true); }, onMouseLeave: function () { setHover(false); }, onClick: function () { openModal(); }, style: {
            width: '100%',
            backgroundColor: hovering ? '#72bcd4' : '#86c5da',
            cursor: 'pointer',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        } },
        "\uC0AC\uC9C4 \uBCF4\uAE30 ",
        numberOfPics > 1 && "(".concat(numberOfPics, "\uC7A5)")));
};
exports.InfoBarFooter = InfoBarFooter;
exports.InfoBarFooter.defaultProps = defaultProps;
//# sourceMappingURL=InfoBarFooter.js.map