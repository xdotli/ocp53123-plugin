import React from 'react';
import { WizardControlStep, WizardNavStepFunction } from './types';
/**
 * Hosts the standard structure of a footer with ties to the active step so that text for buttons can vary from step to step.
 */
export interface WizardFooterProps {
    /** The currently active WizardStep */
    activeStep: WizardControlStep;
    /** Next button callback */
    onNext: () => WizardNavStepFunction | void;
    /** Back button callback */
    onBack: () => WizardNavStepFunction | void;
    /** Cancel link callback */
    onClose: () => void;
    /** Custom text for the Next button. The activeStep's nextButtonText takes precedence. */
    nextButtonText?: React.ReactNode;
    /** Custom text for the Back button */
    backButtonText?: React.ReactNode;
    /** Custom text for the Cancel link */
    cancelButtonText?: React.ReactNode;
    /** Optional flag to disable the first step's back button */
    disableBackButton?: boolean;
}
export declare const WizardFooter: {
    ({ onNext, onBack, onClose, activeStep, disableBackButton, nextButtonText, backButtonText, cancelButtonText }: WizardFooterProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardFooter.d.ts.map