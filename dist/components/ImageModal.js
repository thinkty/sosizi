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
exports.ImageModal = void 0;
var react_1 = __importStar(require("react"));
var defaultProps = {};
var ImageModal = function (props) {
    var isMobile = props.isMobile, open = props.open, pics = props.pics, closeModal = props.closeModal;
    var _a = (0, react_1.useState)(0), index = _a[0], setIndex = _a[1];
    var isFirst = index == 0;
    var isLast = index == pics.length - 1;
    if (!open) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement("div", { onClick: function () {
            if (!isMobile) {
                setIndex(0); // reset index
                closeModal();
            }
        }, style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#00000066',
            zIndex: 110,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
        } },
        isMobile &&
            react_1.default.createElement("div", { onClick: function () {
                    setIndex(0); // reset index
                    closeModal();
                }, style: {
                    position: 'absolute',
                    top: 20,
                    left: window.innerWidth / 2 - 25,
                    width: 50,
                    height: 50,
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    borderRadius: 100,
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                } },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", height: "24", width: "24" },
                    react_1.default.createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z", fill: "#0D0D0D" }))),
        isFirst
            ?
                react_1.default.createElement("div", { style: { width: 50, height: 50 } })
            :
                react_1.default.createElement("div", { onClick: function (e) {
                        !isFirst && setIndex(index - 1);
                        e.stopPropagation(); // Prevent click through
                    }, style: {
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        borderRadius: 100,
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", height: "50", width: "50" },
                        react_1.default.createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z", fill: "#0D0D0D" }))),
        react_1.default.createElement("img", { onClick: function () { }, src: "/images/".concat(pics[index], ".jpg"), height: isMobile ? "auto" : "80%", width: isMobile ? "90%" : "auto", style: {
                backgroundColor: 'white',
                padding: isMobile ? 5 : 10,
                borderRadius: 10,
            } }),
        isLast
            ?
                react_1.default.createElement("div", { style: { width: 50, height: 50 } })
            :
                react_1.default.createElement("div", { onClick: function (e) {
                        setIndex(index + 1);
                        e.stopPropagation();
                    }, style: {
                        cursor: 'pointer',
                        backgroundColor: 'white',
                        borderRadius: 100,
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", height: "50", width: "50" },
                        react_1.default.createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z", fill: "#0D0D0D" })))));
};
exports.ImageModal = ImageModal;
exports.ImageModal.defaultProps = defaultProps;
//# sourceMappingURL=ImageModal.js.map