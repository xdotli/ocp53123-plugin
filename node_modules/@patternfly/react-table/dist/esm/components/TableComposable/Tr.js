import { __rest } from "tslib";
import * as React from 'react';
import { useOUIAProps } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { TableComposableContext } from './TableComposable';
const TrBase = (_a) => {
    var { children, className, isExpanded, isEditable, isHidden = false, isHoverable = false, isRowSelected = false, isStriped = false, isBorderRow = false, innerRef, ouiaId, ouiaSafe = true, resetOffset = false, onRowClick, isSelectable, 'aria-label': passedAriaLabel } = _a, props = __rest(_a, ["children", "className", "isExpanded", "isEditable", "isHidden", "isHoverable", "isRowSelected", "isStriped", "isBorderRow", "innerRef", "ouiaId", "ouiaSafe", "resetOffset", "onRowClick", "isSelectable", 'aria-label']);
    const ouiaProps = useOUIAProps('TableRow', ouiaId, ouiaSafe);
    const [computedAriaLabel, setComputedAriaLabel] = React.useState('');
    let onKeyDown = null;
    if (onRowClick) {
        onKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                onRowClick(e);
                e.preventDefault();
            }
        };
    }
    const rowIsHidden = isHidden || (isExpanded !== undefined && !isExpanded);
    const { registerSelectableRow } = React.useContext(TableComposableContext);
    React.useEffect(() => {
        if (isSelectable && !rowIsHidden) {
            setComputedAriaLabel(`${isRowSelected ? 'Row selected' : ''}`);
            registerSelectableRow();
        }
        else {
            setComputedAriaLabel(undefined);
        }
    }, [isRowSelected, isSelectable, registerSelectableRow, rowIsHidden]);
    const ariaLabel = passedAriaLabel || computedAriaLabel;
    return (React.createElement(React.Fragment, null,
        isSelectable && React.createElement("output", { className: "pf-screen-reader" }, ariaLabel),
        React.createElement("tr", Object.assign({ className: css(className, isExpanded !== undefined && styles.tableExpandableRow, isExpanded && styles.modifiers.expanded, isEditable && inlineStyles.modifiers.inlineEditable, isHoverable && styles.modifiers.hoverable, isRowSelected && styles.modifiers.selected, isStriped && styles.modifiers.striped, isBorderRow && styles.modifiers.borderRow, resetOffset && styles.modifiers.firstCellOffsetReset), hidden: rowIsHidden }, (isHoverable && { tabIndex: 0 }), { "aria-label": ariaLabel, ref: innerRef }, (onRowClick && { onClick: onRowClick, onKeyDown }), ouiaProps, props), children)));
};
export const Tr = React.forwardRef((props, ref) => (React.createElement(TrBase, Object.assign({}, props, { innerRef: ref }))));
Tr.displayName = 'Tr';
//# sourceMappingURL=Tr.js.map