import React from 'react';
import { WizardNavProps, WizardNavItemProps } from '../Wizard';
/** Type used to define 'basic' steps, or in other words, steps that are neither parents or children of parents. */
export interface WizardBasicStep {
    /** Name of the step's nav item */
    name: React.ReactNode;
    /** Unique identifier */
    id: string | number;
    /** Flag to disable the step's nav item */
    isDisabled?: boolean;
    /** Flag to represent whether the step has been visited (navigated to) */
    visited?: boolean;
    /** Content shown when the step's nav item is selected. When treated as a parent step, only sub-step content will be shown. */
    component?: React.ReactElement;
    /** (Unused if nav is controlled) Custom WizardNavItem */
    navItem?: React.ReactElement<WizardNavItemProps>;
    /** (Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it. */
    nextButtonText?: React.ReactNode;
    /** (Unused if footer is controlled) The condition needed to disable the Next button */
    disableNext?: boolean;
    /** (Unused if footer is controlled) True to hide the Cancel button */
    hideCancelButton?: boolean;
    /** (Unused if footer is controlled) True to hide the Back button */
    hideBackButton?: boolean;
}
/** Type used to define parent steps. */
export interface WizardParentStep extends WizardBasicStep {
    /** Nested step IDs */
    subStepIds: string[];
}
/** Type used to define sub-steps. */
export interface WizardSubStep extends WizardBasicStep {
    /** Unique identifier of the parent step */
    parentId: string | number;
}
/** Used to customize aspects of the Wizard's default navigation. */
export interface DefaultWizardNavProps {
    /** Flag indicating nav items with sub steps are expandable */
    isExpandable?: boolean;
    /** Aria-label for the Nav */
    ariaLabel?: string;
    /** Sets aria-labelledby on nav element */
    ariaLabelledBy?: string;
    /** Disable step nav items until they are visited */
    forceStepVisit?: boolean;
}
/** Used to customize aspects of the Wizard's default footer. */
export interface DefaultWizardFooterProps {
    /** The Next button text */
    nextButtonText?: React.ReactNode;
    /** The Back button text */
    backButtonText?: React.ReactNode;
    /** The Cancel button text */
    cancelButtonText?: React.ReactNode;
}
/** Encompasses all step type variants that are internally controlled by the Wizard. */
export declare type WizardControlStep = WizardBasicStep | WizardParentStep | WizardSubStep;
/** Callback for the Wizard's 'onNext', 'onBack', and 'onNavByIndex' properties. */
export declare type WizardNavStepFunction = (currentStep: WizardNavStepData, previousStep: WizardNavStepData) => void;
/** Data returned for either parameter of WizardNavStepFunction. */
export declare type WizardNavStepData = Pick<WizardControlStep, 'id' | 'name'>;
/** Callback for the Wizard's 'nav' property. Returns element which replaces the Wizard's default navigation. */
export declare type CustomWizardNavFunction = (isOpen: boolean, steps: WizardControlStep[], activeStep: WizardControlStep, goToStepByIndex: (index: number) => void) => React.ReactElement<WizardNavProps>;
export declare function isCustomWizardNav(nav: DefaultWizardNavProps | CustomWizardNavFunction): nav is CustomWizardNavFunction;
export declare function isCustomWizardFooter(footer: DefaultWizardFooterProps | React.ReactElement): footer is React.ReactElement;
export declare function isWizardBasicStep(step: WizardControlStep): step is WizardBasicStep;
export declare function isWizardSubStep(step: WizardControlStep): step is WizardSubStep;
export declare function isWizardParentStep(step: WizardControlStep): step is WizardParentStep;
//# sourceMappingURL=types.d.ts.map