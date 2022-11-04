import * as React from 'react';
export declare const variantIcons: {
    success: React.ComponentClass<any, any>;
    danger: React.ComponentClass<any, any>;
    warning: React.ComponentClass<any, any>;
    info: React.ComponentClass<any, any>;
    default: React.ComponentClass<any, any>;
};
export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional class names added to the alert icon. */
    className?: string;
    /** A custom icon. If not set the icon is set according to the variant. */
    customIcon?: React.ReactNode;
    /** Variant of the alert icon. */
    variant: 'success' | 'danger' | 'warning' | 'info' | 'default';
}
export declare const AlertIcon: ({ variant, customIcon, className, ...props }: AlertIconProps) => JSX.Element;
//# sourceMappingURL=AlertIcon.d.ts.map