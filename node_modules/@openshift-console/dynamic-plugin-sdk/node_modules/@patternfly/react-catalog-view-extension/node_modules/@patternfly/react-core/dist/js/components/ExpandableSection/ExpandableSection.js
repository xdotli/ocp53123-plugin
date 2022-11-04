"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandableSection = exports.ExpandableSectionVariant = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const expandable_section_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/ExpandableSection/expandable-section"));
const react_styles_1 = require("@patternfly/react-styles");
const c_expandable_section_m_truncate__content_LineClamp_1 = tslib_1.__importDefault(require('@patternfly/react-tokens/dist/js/c_expandable_section_m_truncate__content_LineClamp'));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
var ExpandableSectionVariant;
(function (ExpandableSectionVariant) {
    ExpandableSectionVariant["default"] = "default";
    ExpandableSectionVariant["truncate"] = "truncate";
})(ExpandableSectionVariant = exports.ExpandableSectionVariant || (exports.ExpandableSectionVariant = {}));
const setLineClamp = (lines, element) => {
    if (!element || lines < 1) {
        return;
    }
    element.style.setProperty(c_expandable_section_m_truncate__content_LineClamp_1.default.name, lines.toString());
};
class ExpandableSection extends React.Component {
    constructor(props) {
        super(props);
        this.expandableContentRef = React.createRef();
        this.state = {
            isExpanded: props.isExpanded
        };
    }
    calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded) {
        if (propOrStateIsExpanded && toggleTextExpanded !== '') {
            return toggleTextExpanded;
        }
        if (!propOrStateIsExpanded && toggleTextCollapsed !== '') {
            return toggleTextCollapsed;
        }
        return toggleText;
    }
    componentDidMount() {
        if (this.props.variant === ExpandableSectionVariant.truncate && this.props.truncateMaxLines) {
            const expandableContent = this.expandableContentRef.current;
            setLineClamp(this.props.truncateMaxLines, expandableContent);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.variant === ExpandableSectionVariant.truncate &&
            prevProps.truncateMaxLines !== this.props.truncateMaxLines) {
            const expandableContent = this.expandableContentRef.current;
            setLineClamp(this.props.truncateMaxLines, expandableContent);
        }
    }
    render() {
        const _a = this.props, { onToggle: onToggleProp, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isActive, className, toggleText, toggleTextExpanded, toggleTextCollapsed, toggleContent, children, isExpanded, isDetached, displaySize, isWidthLimited, isIndented, contentId, variant, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        truncateMaxLines } = _a, props = tslib_1.__rest(_a, ["onToggle", "isActive", "className", "toggleText", "toggleTextExpanded", "toggleTextCollapsed", "toggleContent", "children", "isExpanded", "isDetached", "displaySize", "isWidthLimited", "isIndented", "contentId", "variant", "truncateMaxLines"]);
        let onToggle = onToggleProp;
        let propOrStateIsExpanded = isExpanded;
        // uncontrolled
        if (isExpanded === undefined) {
            propOrStateIsExpanded = this.state.isExpanded;
            onToggle = isOpen => {
                this.setState({ isExpanded: isOpen }, () => onToggleProp(this.state.isExpanded));
            };
        }
        const computedToggleText = this.calculateToggleText(toggleText, toggleTextExpanded, toggleTextCollapsed, propOrStateIsExpanded);
        const expandableToggle = !isDetached && (React.createElement("button", { className: react_styles_1.css(expandable_section_1.default.expandableSectionToggle), type: "button", "aria-expanded": propOrStateIsExpanded, onClick: () => onToggle(!propOrStateIsExpanded) },
            variant !== ExpandableSectionVariant.truncate && (React.createElement("span", { className: react_styles_1.css(expandable_section_1.default.expandableSectionToggleIcon) },
                React.createElement(angle_right_icon_1.default, { "aria-hidden": true }))),
            React.createElement("span", { className: react_styles_1.css(expandable_section_1.default.expandableSectionToggleText) }, toggleContent || computedToggleText)));
        return (React.createElement("div", Object.assign({ className: react_styles_1.css(expandable_section_1.default.expandableSection, propOrStateIsExpanded && expandable_section_1.default.modifiers.expanded, isActive && expandable_section_1.default.modifiers.active, isDetached && expandable_section_1.default.modifiers.detached, displaySize === 'large' && expandable_section_1.default.modifiers.displayLg, isWidthLimited && expandable_section_1.default.modifiers.limitWidth, isIndented && expandable_section_1.default.modifiers.indented, variant === ExpandableSectionVariant.truncate && expandable_section_1.default.modifiers.truncate, className) }, props),
            variant === ExpandableSectionVariant.default && expandableToggle,
            React.createElement("div", { ref: this.expandableContentRef, className: react_styles_1.css(expandable_section_1.default.expandableSectionContent), hidden: variant !== ExpandableSectionVariant.truncate && !propOrStateIsExpanded, id: contentId }, children),
            variant === ExpandableSectionVariant.truncate && expandableToggle));
    }
}
exports.ExpandableSection = ExpandableSection;
ExpandableSection.displayName = 'ExpandableSection';
ExpandableSection.defaultProps = {
    className: '',
    toggleText: '',
    toggleTextExpanded: '',
    toggleTextCollapsed: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onToggle: (isExpanded) => undefined,
    isActive: false,
    isDetached: false,
    displaySize: 'default',
    isWidthLimited: false,
    isIndented: false,
    contentId: '',
    variant: 'default'
};
//# sourceMappingURL=ExpandableSection.js.map