"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveStep = exports.normalizeNavStep = exports.buildSteps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const WizardStep_1 = require("./WizardStep");
function hasWizardStepProps(props) {
    return props.name !== undefined && props.id !== undefined && props.children !== undefined;
}
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
const buildSteps = (children) => react_1.default.Children.toArray(children).reduce((acc, child) => {
    if (react_1.default.isValidElement(child)) {
        if (child.type === WizardStep_1.WizardStep || hasWizardStepProps(child.props)) {
            // Omit "children" and use the whole "child" (WizardStep) for the component prop. Sub-steps will do the same.
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = child.props, { steps: subSteps, id, children } = _a, stepProps = tslib_1.__rest(_a, ["steps", "id", "children"]);
            acc.push(Object.assign(Object.assign({ id, component: child }, stepProps), (subSteps && {
                subStepIds: subSteps === null || subSteps === void 0 ? void 0 : subSteps.map(subStep => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const _a = subStep.props, { children } = _a, subStepProps = tslib_1.__rest(_a, ["children"]);
                    acc.push(Object.assign(Object.assign({}, subStepProps), { component: subStep, parentId: id }));
                    return subStep.props.id;
                })
            })));
        }
        else {
            throw new Error('Wizard only accepts children of type WizardStep');
        }
    }
    return acc;
}, []);
exports.buildSteps = buildSteps;
const normalizeNavStep = ({ id, name }) => ({ id, name });
exports.normalizeNavStep = normalizeNavStep;
const getActiveStep = (steps, currentStepIndex) => steps.find((_, index) => index + 1 === currentStepIndex);
exports.getActiveStep = getActiveStep;
//# sourceMappingURL=utils.js.map