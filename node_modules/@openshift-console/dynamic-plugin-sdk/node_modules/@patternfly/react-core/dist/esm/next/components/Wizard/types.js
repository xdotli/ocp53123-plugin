import React from 'react';
export function isCustomWizardNav(nav) {
    return typeof nav === 'function';
}
export function isCustomWizardFooter(footer) {
    return React.isValidElement(footer);
}
export function isWizardBasicStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.subStepIds) === undefined && !isWizardSubStep(step);
}
export function isWizardSubStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.parentId) !== undefined;
}
export function isWizardParentStep(step) {
    var _a;
    return ((_a = step) === null || _a === void 0 ? void 0 : _a.subStepIds) !== undefined;
}
//# sourceMappingURL=types.js.map