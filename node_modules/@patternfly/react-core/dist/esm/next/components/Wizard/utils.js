import { __rest } from "tslib";
import React from 'react';
import { WizardStep } from './WizardStep';
function hasWizardStepProps(props) {
    return props.name !== undefined && props.id !== undefined && props.children !== undefined;
}
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export const buildSteps = (children) => React.Children.toArray(children).reduce((acc, child) => {
    if (React.isValidElement(child)) {
        if (child.type === WizardStep || hasWizardStepProps(child.props)) {
            // Omit "children" and use the whole "child" (WizardStep) for the component prop. Sub-steps will do the same.
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = child.props, { steps: subSteps, id, children } = _a, stepProps = __rest(_a, ["steps", "id", "children"]);
            acc.push(Object.assign(Object.assign({ id, component: child }, stepProps), (subSteps && {
                subStepIds: subSteps === null || subSteps === void 0 ? void 0 : subSteps.map(subStep => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const _a = subStep.props, { children } = _a, subStepProps = __rest(_a, ["children"]);
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
export const normalizeNavStep = ({ id, name }) => ({ id, name });
export const getActiveStep = (steps, currentStepIndex) => steps.find((_, index) => index + 1 === currentStepIndex);
//# sourceMappingURL=utils.js.map