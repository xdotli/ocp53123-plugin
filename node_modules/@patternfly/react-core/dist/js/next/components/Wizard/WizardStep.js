"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const WizardBody_1 = require("./WizardBody");
const WizardStep = ({ body, children }) => body === undefined ? react_1.default.createElement(WizardBody_1.WizardBody, Object.assign({}, body), children) : react_1.default.createElement(react_1.default.Fragment, null, children);
exports.WizardStep = WizardStep;
exports.WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map