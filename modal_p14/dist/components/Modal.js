"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./style/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Function for displaying the modal
 * @param {string} text 
 * @returns {JS} react component
 */
function Modal(_ref) {
  let {
    text
  } = _ref;
  const handleCloseModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "modal-content-close",
    onClick: handleCloseModal,
    "aria-hidden": true
  }, "X"), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-content-text"
  }, text)));
}
Modal.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = Modal;
exports.default = _default;