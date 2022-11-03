import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { KeyTypes } from '../../../helpers/constants';
import { WizardNav, WizardNavItem } from '../Wizard';
import { isWizardBasicStep, isWizardParentStep, isWizardSubStep, isCustomWizardNav } from './types';
export const WizardToggle = ({ steps, activeStep, footer, nav, goToStepByIndex, unmountInactiveSteps = true, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const isActiveSubStep = isWizardSubStep(activeStep);
    const handleKeyClicks = React.useCallback((event) => {
        if (isNavOpen && event.key === KeyTypes.Escape) {
            setIsNavOpen(!isNavOpen);
        }
    }, [isNavOpen]);
    // Open/close collapsable nav on keydown event
    React.useEffect(() => {
        const target = typeof document !== 'undefined' ? document.body : null;
        target === null || target === void 0 ? void 0 : target.addEventListener('keydown', handleKeyClicks, false);
        return () => {
            target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', handleKeyClicks, false);
        };
    }, [handleKeyClicks]);
    // Only render the active step when unmountInactiveSteps is true
    const bodyContent = unmountInactiveSteps
        ? activeStep === null || activeStep === void 0 ? void 0 : activeStep.component
        : steps.map(step => {
            if ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.name) === step.name) {
                return step.component;
            }
            return (React.createElement("div", { key: step.id, style: { display: 'none' } }, step.component));
        });
    const wizardNav = React.useMemo(() => {
        if (isCustomWizardNav(nav)) {
            return nav(isNavOpen, steps, activeStep, goToStepByIndex);
        }
        const props = Object.assign({ isOpen: isNavOpen, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav.ariaLabel) || 'Wizard nav' }, ((nav === null || nav === void 0 ? void 0 : nav.ariaLabelledBy) && { 'aria-labelledby': nav === null || nav === void 0 ? void 0 : nav.ariaLabelledBy }));
        return (React.createElement(WizardNav, Object.assign({}, props), steps.map((step, index) => {
            var _a;
            const stepIndex = index + 1;
            const stepNavItem = step.navItem && React.createElement(React.Fragment, { key: step.id }, step.navItem);
            if (isWizardParentStep(step)) {
                let firstSubStepIndex;
                let hasActiveChild = false;
                const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, index) => {
                    const subStep = steps.find(step => step.id === subStepId);
                    const subStepIndex = steps.indexOf(subStep) + 1;
                    if (index === 0) {
                        firstSubStepIndex = subStepIndex;
                    }
                    if ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id) {
                        hasActiveChild = true;
                    }
                    return subStep.navItem ? (React.createElement(React.Fragment, { key: subStep.id }, subStep.navItem)) : (React.createElement(WizardNavItem, { key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id, isDisabled: subStep.isDisabled || ((nav === null || nav === void 0 ? void 0 : nav.forceStepVisit) && !subStep.visited), step: subStepIndex, onNavItemClick: goToStepByIndex }));
                });
                const hasEnabledChildren = React.Children.toArray(subNavItems).some(child => React.isValidElement(child) && !child.props.isDisabled);
                return (stepNavItem || (React.createElement(WizardNavItem, { key: step.id, id: step.id, content: step.name, isExpandable: nav === null || nav === void 0 ? void 0 : nav.isExpandable, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, step: firstSubStepIndex, onNavItemClick: goToStepByIndex },
                    React.createElement(WizardNav, Object.assign({}, props, { returnList: true }), subNavItems))));
            }
            if (isWizardBasicStep(step)) {
                return (stepNavItem || (React.createElement(WizardNavItem, { key: step.id, id: step.id, content: step.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === step.id, isDisabled: step.isDisabled || ((nav === null || nav === void 0 ? void 0 : nav.forceStepVisit) && !step.visited), step: stepIndex, onNavItemClick: goToStepByIndex })));
            }
        })));
    }, [activeStep === null || activeStep === void 0 ? void 0 : activeStep.id, goToStepByIndex, isNavOpen, nav, steps]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => setIsNavOpen(prevIsOpen => !prevIsOpen), className: css(styles.wizardToggle, isNavOpen && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavOpen },
            React.createElement("span", { className: css(styles.wizardToggleList) },
                React.createElement("span", { className: css(styles.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 :
                    activeStep.name,
                    isActiveSubStep && React.createElement(AngleRightIcon, { className: css(styles.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && React.createElement("span", { className: css(styles.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 : activeStep.name)),
            React.createElement("span", { className: css(styles.wizardToggleIcon) },
                React.createElement(CaretDownIcon, { "aria-hidden": "true" }))),
        React.createElement("div", { className: css(styles.wizardOuterWrap) },
            React.createElement("div", { className: css(styles.wizardInnerWrap) },
                wizardNav,
                bodyContent),
            footer)));
};
WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map