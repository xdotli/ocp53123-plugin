import * as React from 'react';
import { PickOptional } from '../../helpers/typeUtils';
export declare enum ExpandableSectionVariant {
    default = "default",
    truncate = "truncate"
}
export interface ExpandableSectionProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the expandable section. */
    children?: React.ReactNode;
    /** Additional classes added to the expandable section. */
    className?: string;
    /** Flag to indicate if the content is expanded */
    isExpanded?: boolean;
    /** Text that appears in the attached toggle */
    toggleText?: string;
    /** Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
    toggleTextExpanded?: string;
    /** Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
    toggleTextCollapsed?: string;
    /** React node that appears in the attached toggle in place of toggle text */
    toggleContent?: React.ReactNode;
    /** Callback function to toggle the expandable section. Detached expandable sections should use the onToggle property of the expandable section toggle sub-component. */
    onToggle?: (isExpanded: boolean) => void;
    /** Forces active state */
    isActive?: boolean;
    /** Indicates the expandable section has a detached toggle */
    isDetached?: boolean;
    /** ID of the content of the expandable section */
    contentId?: string;
    /** Display size variant. Set to large for disclosure styling. */
    displaySize?: 'default' | 'large';
    /** Flag to indicate the width of the component is limited. Set to true for disclosure styling. */
    isWidthLimited?: boolean;
    /** Flag to indicate if the content is indented */
    isIndented?: boolean;
    /** @beta Determines the variant of the expandable section. When passing in "truncate" as the
     * variant, the expandable content will be truncated after 3 lines by default.
     */
    variant?: 'default' | 'truncate';
    /** @beta Truncates the expandable content to the specified number of lines when using the
     * "truncate" variant. */
    truncateMaxLines?: number;
}
interface ExpandableSectionState {
    isExpanded: boolean;
}
export declare class ExpandableSection extends React.Component<ExpandableSectionProps, ExpandableSectionState> {
    static displayName: string;
    constructor(props: ExpandableSectionProps);
    expandableContentRef: React.RefObject<HTMLDivElement>;
    static defaultProps: PickOptional<ExpandableSectionProps>;
    private calculateToggleText;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ExpandableSectionProps): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ExpandableSection.d.ts.map