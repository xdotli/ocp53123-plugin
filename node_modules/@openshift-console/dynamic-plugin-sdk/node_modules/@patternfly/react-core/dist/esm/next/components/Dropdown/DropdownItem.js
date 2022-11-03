import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../../../components/Menu';
export const DropdownItem = (_a) => {
    var { children, className, description } = _a, props = __rest(_a, ["children", "className", "description"]);
    return (React.createElement(MenuItem, Object.assign({ className: css(className), description: description }, props), children));
};
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map