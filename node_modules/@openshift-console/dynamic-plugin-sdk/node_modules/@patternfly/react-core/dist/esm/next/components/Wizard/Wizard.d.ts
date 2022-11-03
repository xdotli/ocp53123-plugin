import React from 'react';
import { DefaultWizardFooterProps, DefaultWizardNavProps, WizardNavStepFunction, CustomWizardNavFunction } from './types';
import { WizardStepProps } from './WizardStep';
/**
 * Wrapper for all steps and hosts state, including navigation helpers, within context.
 * The WizardContext provided by default gives any child of wizard access to those resources.
 */
export interface WizardProps extends React.HTMLProps<HTMLDivElement> {
    /** Step components */
    children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[];
    /** Wizard header */
    header?: React.ReactNode;
    /** Wizard footer */
    footer?: DefaultWizardFooterProps | React.ReactElement;
    /** Default wizard nav props or a custom WizardNav (with callback) */
    nav?: DefaultWizardNavProps | CustomWizardNavFunction;
    /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
    startIndex?: number;
    /** Additional classes spread to the wizard */
    className?: string;
    /** Custom width of the wizard */
    width?: number | string;
    /** Custom height of the wizard */
    height?: number | string;
    /** Callback function when a step in the nav is clicked */
    onNavByIndex?: WizardNavStepFunction;
    /** Callback function after next button is clicked */
    onNext?: WizardNavStepFunction;
    /** Callback function after back button is clicked */
    onBack?: WizardNavStepFunction;
    /** Callback function to save at the end of the wizard, if not specified uses onClose */
    onSave?: () => void;
    /** Callback function to close the wizard */
    onClose?: () => void;
}
export declare const Wizard: {
    (props: WizardProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Wizard.d.ts.map