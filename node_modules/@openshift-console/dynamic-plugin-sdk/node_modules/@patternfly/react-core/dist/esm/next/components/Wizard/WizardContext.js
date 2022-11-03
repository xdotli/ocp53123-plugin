import React from 'react';
import { getActiveStep } from './utils';
export const WizardContext = React.createContext({});
// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = React.useState(initialSteps);
    const [footer, setFooter] = React.useState(initialFooter);
    const activeStep = getActiveStep(steps, currentStepIndex);
    // When the active step changes and the newly active step isn't visited, set the visited flag to true.
    React.useEffect(() => {
        if (activeStep && !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.visited)) {
            setSteps(prevSteps => prevSteps.map(step => {
                if (step.id === activeStep.id) {
                    return Object.assign(Object.assign({}, step), { visited: true });
                }
                return step;
            }));
        }
    }, [activeStep]);
    return (React.createElement(WizardContext.Provider, { value: {
            steps,
            activeStep,
            footer,
            onNext,
            onBack,
            onClose,
            goToStepById,
            goToStepByName,
            goToStepByIndex,
            setFooter
        } }, typeof children === 'function' ? children({ activeStep, steps, footer, onNext, onBack, onClose }) : children));
};
export const useWizardContext = () => React.useContext(WizardContext);
//# sourceMappingURL=WizardContext.js.map