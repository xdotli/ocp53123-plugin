import React from 'react';
import { MenuProps } from '../../../components/Menu';
export interface DropdownProps extends MenuProps {
    /** Anything which can be rendered in a dropdown. */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown. */
    className?: string;
    /** Renderer for a custom dropdown toggle. Forwards a ref to the toggle. */
    toggle: (toggleRef: React.RefObject<any>) => React.ReactNode;
    /** Flag to indicate if menu is opened.*/
    isOpen?: boolean;
    /** Function callback called when user selects item. */
    onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, itemId?: string | number) => void;
    /** Callback to allow the dropdown component to change the open state of the menu.
     * Triggered by clicking outside of the menu, or by pressing either tab or escape. */
    onOpenChange?: (isOpen: boolean) => void;
    /** Indicates if the menu should be without the outer box-shadow. */
    isPlain?: boolean;
    /** Indicates if the menu should be scrollable. */
    isScrollable?: boolean;
    /** Min width of the menu. */
    minWidth?: string;
}
export declare const Dropdown: React.FunctionComponent<DropdownProps>;
//# sourceMappingURL=Dropdown.d.ts.map