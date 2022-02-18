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
exports.App = void 0;
var react_1 = __importStar(require("react"));
var ImageModal_1 = require("./ImageModal");
var InfoBar_1 = require("./InfoBar");
var MainBar_1 = require("./MainBar");
var types_1 = require("./types");
var defaultProps = {
    mobileViewWidth: 600,
    message: 'Hello World!',
};
var App = function (props) {
    // Retrieve points from local storage and assert that the points is an array
    var rawPoints = localStorage.getItem('carDeliveryPoints');
    if (rawPoints == null) {
        alert('Error-001');
        return (react_1.default.createElement("div", null));
    }
    var carDeliveryPoints = JSON.parse(rawPoints);
    if (!Array.isArray(carDeliveryPoints)) {
        alert('Error-002');
        return (react_1.default.createElement("div", null));
    }
    var _a = (0, react_1.useState)(window.innerWidth < props.mobileViewWidth), isMobile = _a[0], setScreen = _a[1];
    var _b = (0, react_1.useState)(0), index = _b[0], setIndex = _b[1];
    var _c = (0, react_1.useState)(types_1.Status.Ready), status = _c[0], setStatus = _c[1];
    var _d = (0, react_1.useState)(null), info = _d[0], setInfo = _d[1];
    var _e = (0, react_1.useState)(false), modalOpen = _e[0], openModal = _e[1];
    (0, react_1.useEffect)(function () {
        // Making the application responsive
        window.addEventListener('resize', function () {
            setScreen(window.innerWidth < props.mobileViewWidth);
        });
        localStorage.removeItem('selectedPoint');
        // Setting the info based on localStorage event for the key 'selectedPoint'.
        // If the current status is 'OnDelivery', the index value should be used to reference info value.
        // If the current status is 'Ready', the 'selectedPoint' should be used as the value of info.
        window.addEventListener('storage', function () {
            var raw = localStorage.getItem('selectedPoint');
            if (status === types_1.Status.Ready) {
                setInfo(raw != null ? JSON.parse(raw) : null);
            }
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(InfoBar_1.InfoBar, { isMobile: isMobile, info: status === types_1.Status.Ready ? info : carDeliveryPoints[index], index: status === types_1.Status.Ready ? null : index, openModal: function () { openModal(true); } }),
        react_1.default.createElement(MainBar_1.MainBar, { isMobile: isMobile, totalNumberOfCarDeliveryPoints: carDeliveryPoints.length, index: index, setIndex: function (newIndex) { setIndex(newIndex); }, status: status, setStatus: function (newStatus) { setStatus(newStatus); } }),
        react_1.default.createElement(ImageModal_1.ImageModal, { isMobile: isMobile, open: modalOpen, pics: info == null ? [] : info.pics, closeModal: function () { openModal(false); } })));
};
exports.App = App;
exports.App.defaultProps = defaultProps;
//# sourceMappingURL=App.js.map