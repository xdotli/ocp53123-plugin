import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { Button, ButtonVariant } from '../../../components/Button';
export const WizardFooter = ({ onNext, onBack, onClose, activeStep, disableBackButton, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel' }) => (React.createElement("footer", { className: css(styles.wizardFooter) },
    React.createElement(Button, { variant: ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: activeStep === null || activeStep === void 0 ? void 0 : activeStep.disableNext }, (activeStep === null || activeStep === void 0 ? void 0 : activeStep.nextButtonText) || nextButtonText),
    !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.hideBackButton) && (React.createElement(Button, { variant: ButtonVariant.secondary, onClick: onBack, isDisabled: disableBackButton }, backButtonText)),
    !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.hideCancelButton) && (React.createElement("div", { className: styles.wizardFooterCancel },
        React.createElement(Button, { variant: ButtonVariant.link, onClick: onClose }, cancelButtonText)))));
WizardFooter.displayName = 'WizardFooter';
//# sourceMappingURL=WizardFooter.js.map