"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBar = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("./Button");
var Divider_1 = require("./Divider");
var types_1 = require("./types");
var defaultProps = {};
var MainBar = function (props) {
    var isMobile = props.isMobile, totalNumberOfCarDeliveryPoints = props.totalNumberOfCarDeliveryPoints, index = props.index, setIndex = props.setIndex, status = props.status, setStatus = props.setStatus;
    return (react_1.default.createElement("div", { style: {
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            bottom: '10px',
            borderRadius: 20,
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            width: isMobile ? '90%' : '300px',
            height: '60px',
            backgroundColor: 'white',
            zIndex: 105,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'normal',
            alignItems: 'center',
        } },
        status === types_1.Status.Ready &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Button_1.Button, { isMobile: isMobile, content: "\uBC30\uB2EC \uC2DC\uC791", borderRadius: "20px", onClick: function () {
                        setStatus(types_1.Status.OnDelivery);
                        setIndex(0);
                        localStorage.setItem('currentIndex', '0');
                    } })),
        status === types_1.Status.OnDelivery &&
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Button_1.Button, { isMobile: isMobile, content: index === totalNumberOfCarDeliveryPoints - 1 ? "끝" : "다음", borderRadius: "20px 0px 0px 20px", onClick: function () {
                        if (index === totalNumberOfCarDeliveryPoints - 1) {
                            setStatus(types_1.Status.Ready);
                            setIndex(0);
                            localStorage.setItem('currentIndex', '0');
                        }
                        else {
                            setIndex(index + 1);
                            localStorage.setItem('currentIndex', "".concat(index + 1));
                        }
                    } }),
                react_1.default.createElement(Divider_1.Divider, null),
                react_1.default.createElement(Button_1.Button, { isMobile: isMobile, content: "\uC911\uB2E8", borderRadius: "0px 20px 20px 0px", onClick: function () {
                        setStatus(types_1.Status.Ready);
                        setIndex(0);
                        localStorage.setItem('currentIndex', '0');
                    } }))));
};
exports.MainBar = MainBar;
exports.MainBar.defaultProps = defaultProps;
//# sourceMappingURL=MainBar.js.map