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
exports.Button = void 0;
var react_1 = __importStar(require("react"));
var defaultProps = {
    onClick: function () { console.log('Default onClick handler'); }
};
var Button = function (props) {
    var _a = (0, react_1.useState)(false), isHovering = _a[0], setHover = _a[1];
    return (react_1.default.createElement("div", { onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: function () {
            props.onClick();
        }, style: {
            flex: 1,
            borderRadius: props.borderRadius,
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isHovering ? '#f3f3f3' : 'transparent',
            fontSize: '20px',
            fontWeight: 'bold',
            userSelect: 'none', // Don't make the texts selectable
        } }, props.content));
};
exports.Button = Button;
exports.Button.defaultProps = defaultProps;
//# sourceMappingURL=Button.js.map