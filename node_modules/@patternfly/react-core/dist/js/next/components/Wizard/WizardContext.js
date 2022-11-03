"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWizardContext = exports.WizardContextProvider = exports.WizardContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("./utils");
exports.WizardContext = react_1.default.createContext({});
// eslint-disable-next-line patternfly-react/no-anonymous-functions
const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = react_1.default.useState(initialSteps);
    const [footer, setFooter] = react_1.default.useState(initialFooter);
    const activeStep = utils_1.getActiveStep(steps, currentStepIndex);
    // When the active step changes and the newly active step isn't visited, set the visited flag to true.
    react_1.default.useEffect(() => {
        if (activeStep && !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.visited)) {
            setSteps(prevSteps => prevSteps.map(step => {
                if (step.id === activeStep.id) {
                    return Object.assign(Object.assign({}, step), { visited: true });
                }
                return step;
            }));
        }
    }, [activeStep]);
    return (react_1.default.createElement(exports.WizardContext.Provider, { value: {
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
exports.WizardContextProvider = WizardContextProvider;
const useWizardContext = () => react_1.default.useContext(exports.WizardContext);
exports.useWizardContext = useWizardContext;
//# sourceMappingURL=WizardContext.js.map