"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWizardParentStep = exports.isWizardSubStep = exports.isWizardBasicStep = exports.isCustomWizardFooter = exports.isCustomWizardNav = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
function isCustomWizardNav(nav) {
    return typeof nav === 'function';
}
exports.isCustomWizardNav = isCustomWizardNav;
function isCustomWizardFooter(footer) {
    return react_1.default.isValidElement(footer);
}
exports.isCustomWizardFooter = isCustomWizardFooter;
function isWizardBasicStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.subStepIds) === undefined && !isWizardSubStep(step);
}
exports.isWizardBasicStep = isWizardBasicStep;
function isWizardSubStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.parentId) !== undefined;
}
exports.isWizardSubStep = isWizardSubStep;
function isWizardParentStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.subStepIds) !== undefined;
}
exports.isWizardParentStep = isWizardParentStep;
//# sourceMappingURL=types.js.map