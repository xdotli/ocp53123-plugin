"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardFooter = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const Button_1 = require("../../../components/Button");
const WizardFooter = ({ onNext, onBack, onClose, activeStep, disableBackButton, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel' }) => (react_1.default.createElement("footer", { className: react_styles_1.css(wizard_1.default.wizardFooter) },
    react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: activeStep === null || activeStep === void 0 ? void 0 : activeStep.disableNext }, (activeStep === null || activeStep === void 0 ? void 0 : activeStep.nextButtonText) || nextButtonText),
    !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.hideBackButton) && (react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.secondary, onClick: onBack, isDisabled: disableBackButton }, backButtonText)),
    !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.hideCancelButton) && (react_1.default.createElement("div", { className: wizard_1.default.wizardFooterCancel },
        react_1.default.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.link, onClick: onClose }, cancelButtonText)))));
exports.WizardFooter = WizardFooter;
exports.WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map