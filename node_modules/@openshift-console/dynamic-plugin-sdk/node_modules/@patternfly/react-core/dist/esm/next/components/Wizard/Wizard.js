import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { isCustomWizardFooter, isWizardParentStep } from './types';
import { buildSteps, normalizeNavStep } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardFooter } from './WizardFooter';
import { WizardToggle } from './WizardToggle';
export const Wizard = (props) => {
    const { startIndex = 1, children, footer, onNavByIndex, onNext, onBack, onSave, onClose } = props, internalProps = __rest(props, ["startIndex", "children", "footer", "onNavByIndex", "onNext", "onBack", "onSave", "onClose"]);
    const [currentStepIndex, setCurrentStepIndex] = React.useState(startIndex);
    const steps = buildSteps(children);
    const goToStepByIndex = (index) => {
        const lastStepIndex = steps.length;
        if (index < 1) {
            index = 1;
        }
        else if (index > lastStepIndex) {
            index = lastStepIndex;
        }
        const currStep = steps[index - 1];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(index);
        return onNavByIndex === null || onNavByIndex === void 0 ? void 0 : onNavByIndex(normalizeNavStep(currStep), normalizeNavStep(prevStep));
    };
    const goToNextStep = () => {
        // Save when on the last step, otherwise close
        if (currentStepIndex >= steps.length) {
            if (onSave) {
                return onSave();
            }
            return onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        let currStep = steps[currentStepIndex];
        let newStepIndex = currentStepIndex + 1;
        const prevStep = steps[currentStepIndex - 1];
        // Skip parent step and focus on the first sub-step if they exist
        if (isWizardParentStep(currStep)) {
            newStepIndex += 1;
            currStep = steps[currentStepIndex + 1];
        }
        setCurrentStepIndex(newStepIndex);
        return onNext === null || onNext === void 0 ? void 0 : onNext(normalizeNavStep(currStep), normalizeNavStep(prevStep));
    };
    const goToPrevStep = () => {
        if (steps.length < currentStepIndex) {
            // Previous step was removed, just update the currentStep state
            setCurrentStepIndex(steps.length);
        }
        else {
            let currStep = steps[currentStepIndex - 2];
            let newStepIndex = currentStepIndex - 1;
            const prevStep = steps[currentStepIndex - 1];
            // // Skip parent step and focus on the step prior
            if (isWizardParentStep(currStep)) {
                newStepIndex -= 1;
                currStep = steps[currentStepIndex - 3];
            }
            setCurrentStepIndex(newStepIndex);
            return onBack === null || onBack === void 0 ? void 0 : onBack(normalizeNavStep(currStep), normalizeNavStep(prevStep));
        }
    };
    const goToStepById = (id) => {
        const stepIndex = steps.findIndex(step => step.id === id) + 1;
        stepIndex > 0 && setCurrentStepIndex(stepIndex);
    };
    const goToStepByName = (name) => {
        const stepIndex = steps.findIndex(step => step.name === name) + 1;
        stepIndex > 0 && setCurrentStepIndex(stepIndex);
    };
    return (React.createElement(WizardContextProvider, { steps: steps, currentStepIndex: currentStepIndex, footer: isCustomWizardFooter(footer) && footer, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        React.createElement(WizardInternal, Object.assign({}, internalProps, { footer: footer }), children)));
};
// eslint-disable-next-line patternfly-react/no-anonymous-functions
const WizardInternal = (_a) => {
    var _b;
    var { height, width, className, header, footer, nav } = _a, divProps = __rest(_a, ["height", "width", "className", "header", "footer", "nav"]);
    const { activeStep, steps, footer: customFooter, onNext, onBack, onClose, goToStepByIndex } = useWizardContext();
    const wizardFooter = customFooter || (React.createElement(WizardFooter, Object.assign({ activeStep: activeStep, onNext: onNext, onBack: onBack, onClose: onClose, disableBackButton: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === ((_b = steps[0]) === null || _b === void 0 ? void 0 : _b.id) }, footer)));
    return (React.createElement("div", Object.assign({ className: css(styles.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, divProps),
        header,
        React.createElement(WizardToggle, { steps: steps, activeStep: activeStep, footer: wizardFooter, nav: nav, goToStepByIndex: goToStepByIndex })));
};
Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map