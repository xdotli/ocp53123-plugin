"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_core_1 = require("@patternfly/react-core");
const table_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Table/table"));
const inline_edit_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/InlineEdit/inline-edit"));
const react_styles_1 = require("@patternfly/react-styles");
const TableComposable_1 = require("./TableComposable");
const TrBase = (_a) => {
    var { children, className, isExpanded, isEditable, isHidden = false, isHoverable = false, isRowSelected = false, isStriped = false, isBorderRow = false, innerRef, ouiaId, ouiaSafe = true, resetOffset = false, onRowClick, isSelectable, 'aria-label': passedAriaLabel } = _a, props = tslib_1.__rest(_a, ["children", "className", "isExpanded", "isEditable", "isHidden", "isHoverable", "isRowSelected", "isStriped", "isBorderRow", "innerRef", "ouiaId", "ouiaSafe", "resetOffset", "onRowClick", "isSelectable", 'aria-label']);
    const ouiaProps = react_core_1.useOUIAProps('TableRow', ouiaId, ouiaSafe);
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
    const { registerSelectableRow } = React.useContext(TableComposable_1.TableComposableContext);
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
        React.createElement("tr", Object.assign({ className: react_styles_1.css(className, isExpanded !== undefined && table_1.default.tableExpandableRow, isExpanded && table_1.default.modifiers.expanded, isEditable && inline_edit_1.default.modifiers.inlineEditable, isHoverable && table_1.default.modifiers.hoverable, isRowSelected && table_1.default.modifiers.selected, isStriped && table_1.default.modifiers.striped, isBorderRow && table_1.default.modifiers.borderRow, resetOffset && table_1.default.modifiers.firstCellOffsetReset), hidden: rowIsHidden }, (isHoverable && { tabIndex: 0 }), { "aria-label": ariaLabel, ref: innerRef }, (onRowClick && { onClick: onRowClick, onKeyDown }), ouiaProps, props), children)));
};
exports.Tr = React.forwardRef((props, ref) => (React.createElement(TrBase, Object.assign({}, props, { innerRef: ref }))));
exports.Tr.displayName = 'Tr';
//# sourceMappingURL=Tr.js.map