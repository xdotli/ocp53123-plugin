import React from 'react';
import { WizardControlStep, WizardNavStepData } from './types';
import { WizardStepProps } from './WizardStep';
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export declare const buildSteps: (children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[]) => WizardControlStep[];
export declare const normalizeNavStep: ({ id, name }: WizardNavStepData) => {
    id: string | number;
    name: React.ReactNode;
};
export declare const getActiveStep: (steps: WizardControlStep[], currentStepIndex: number) => WizardControlStep;
//# sourceMappingURL=utils.d.ts.map