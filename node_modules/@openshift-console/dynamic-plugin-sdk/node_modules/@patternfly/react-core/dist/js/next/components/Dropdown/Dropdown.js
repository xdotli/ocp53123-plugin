"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const Menu_1 = require("../../../components/Menu");
const Popper_1 = require("../../../helpers/Popper/Popper");
const Dropdown = (_a) => {
    var { children, className, onSelect, isOpen, toggle, onOpenChange, isPlain, isScrollable, minWidth } = _a, props = tslib_1.__rest(_a, ["children", "className", "onSelect", "isOpen", "toggle", "onOpenChange", "isPlain", "isScrollable", "minWidth"]);
    const localMenuRef = react_1.default.useRef();
    const toggleRef = react_1.default.useRef();
    const containerRef = react_1.default.useRef();
    const menuRef = props.innerRef || localMenuRef;
    react_1.default.useEffect(() => {
        const handleMenuKeys = (event) => {
            var _a, _b, _c, _d;
            if (!isOpen && ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                // toggle was clicked open, focus on first menu item
                if (event.key === 'Enter') {
                    setTimeout(() => {
                        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
                        firstElement && firstElement.focus();
                    }, 0);
                }
            }
            // Close the menu on tab or escape if onOpenChange is provided
            if ((isOpen && onOpenChange && ((_b = menuRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) ||
                ((_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.contains(event.target))) {
                if (event.key === 'Escape' || event.key === 'Tab') {
                    onOpenChange(!isOpen);
                    (_d = toggleRef.current) === null || _d === void 0 ? void 0 : _d.focus();
                }
            }
        };
        const handleClickOutside = (event) => {
            var _a, _b;
            // If the event is not on the toggle and onOpenChange callback is provided, close the menu
            if (isOpen && onOpenChange && !((_a = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                if (isOpen && !((_b = menuRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                    onOpenChange(false);
                }
            }
        };
        window.addEventListener('keydown', handleMenuKeys);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('keydown', handleMenuKeys);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, menuRef, onOpenChange]);
    const menu = (react_1.default.createElement(Menu_1.Menu, Object.assign({ className: react_styles_1.css(className), ref: menuRef, onSelect: (event, itemId) => onSelect(event, itemId), isPlain: isPlain, isScrollable: isScrollable }, (minWidth && {
        style: {
            '--pf-c-menu--MinWidth': minWidth
        }
    }), props),
        react_1.default.createElement(Menu_1.MenuContent, null, children)));
    return (react_1.default.createElement("div", { ref: containerRef },
        react_1.default.createElement(Popper_1.Popper, { trigger: toggle(toggleRef), removeFindDomNode: true, popper: menu, appendTo: containerRef.current || undefined, isVisible: isOpen })));
};
exports.Dropdown = Dropdown;
exports.Dropdown.displayName = 'Dropdown';
//# sourceMappingURL=Dropdown.js.map