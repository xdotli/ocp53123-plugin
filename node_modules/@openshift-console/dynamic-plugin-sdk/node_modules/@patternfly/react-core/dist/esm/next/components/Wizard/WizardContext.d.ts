import React from 'react';
import { WizardControlStep } from './types';
export interface WizardContextProps {
    /** List of steps */
    steps: WizardControlStep[];
    /** Active step */
    activeStep: WizardControlStep;
    /** Footer element */
    footer: React.ReactElement;
    /** Navigate to the next step */
    onNext: () => void;
    /** Navigate to the previous step */
    onBack: () => void;
    /** Close the wizard */
    onClose: () => void;
    /** Navigate to step by ID */
    goToStepById: (id: number | string) => void;
    /** Navigate to step by name */
    goToStepByName: (name: string) => void;
    /** Navigate to step by index */
    goToStepByIndex: (index: number) => void;
    /** Update the footer with any react element */
    setFooter: (footer: React.ReactElement) => void;
}
export declare const WizardContext: React.Context<WizardContextProps>;
interface WizardContextRenderProps {
    steps: WizardControlStep[];
    activeStep: WizardControlStep;
    footer: React.ReactElement;
    onNext(): void;
    onBack(): void;
    onClose(): void;
}
export interface WizardContextProviderProps {
    steps: WizardControlStep[];
    currentStepIndex: number;
    footer: React.ReactElement;
    children: React.ReactElement | ((props: WizardContextRenderProps) => React.ReactElement);
    onNext(): void;
    onBack(): void;
    onClose(): void;
    goToStepById(id: number | string): void;
    goToStepByName(name: string): void;
    goToStepByIndex(index: number): void;
}
export declare const WizardContextProvider: React.FunctionComponent<WizardContextProviderProps>;
export declare const useWizardContext: () => WizardContextProps;
export {};
//# sourceMappingURL=WizardContext.d.ts.map