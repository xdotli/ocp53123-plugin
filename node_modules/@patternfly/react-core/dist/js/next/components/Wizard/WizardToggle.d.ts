import React from 'react';
import { WizardControlStep, CustomWizardNavFunction, DefaultWizardNavProps } from './types';
/**
 * Used to toggle between step content, including the body and footer. This is also where the nav and its expandability is controlled.
 */
export interface WizardToggleProps {
    /** List of steps and/or sub-steps */
    steps: WizardControlStep[];
    /** The currently active WizardStep */
    activeStep: WizardControlStep;
    /** The WizardFooter */
    footer: React.ReactElement;
    /** Custom WizardNav or callback used to create a default WizardNav */
    nav: DefaultWizardNavProps | CustomWizardNavFunction;
    /** Navigate using the step index */
    goToStepByIndex: (index: number) => void;
    /** The button's aria-label */
    'aria-label'?: string;
    /** Flag to unmount inactive steps instead of hiding. Defaults to true */
    unmountInactiveSteps?: boolean;
}
export declare const WizardToggle: {
    ({ steps, activeStep, footer, nav, goToStepByIndex, unmountInactiveSteps, "aria-label": ariaLabel }: WizardToggleProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardToggle.d.ts.map