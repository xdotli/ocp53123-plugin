import React from 'react';
import { MenuItemProps } from '../../../components/Menu';
export interface DropdownItemProps extends Omit<MenuItemProps, 'ref'> {
    /** Anything which can be rendered in a dropdown item */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown item */
    className?: string;
    /** Description of the dropdown item */
    description?: React.ReactNode;
}
export declare const DropdownItem: React.FunctionComponent<MenuItemProps>;
//# sourceMappingURL=DropdownItem.d.ts.map