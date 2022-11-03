import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Timestamp/timestamp';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '../Tooltip';
export var TimestampFormat;
(function (TimestampFormat) {
    TimestampFormat["full"] = "full";
    TimestampFormat["long"] = "long";
    TimestampFormat["medium"] = "medium";
    TimestampFormat["short"] = "short";
})(TimestampFormat || (TimestampFormat = {}));
export var TimestampTooltipVariant;
(function (TimestampTooltipVariant) {
    TimestampTooltipVariant["default"] = "default";
    TimestampTooltipVariant["custom"] = "custom";
})(TimestampTooltipVariant || (TimestampTooltipVariant = {}));
export const Timestamp = (_a) => {
    var { children, className, customFormat, date: dateProp = new Date(), dateFormat, displaySuffix = '', is12Hour, locale, timeFormat, tooltip } = _a, props = __rest(_a, ["children", "className", "customFormat", "date", "dateFormat", "displaySuffix", "is12Hour", "locale", "timeFormat", "tooltip"]);
    const hasTimeFormat = timeFormat && !customFormat;
    const formatOptions = Object.assign(Object.assign(Object.assign({}, (dateFormat && !customFormat && { dateStyle: dateFormat })), (customFormat && Object.assign({}, customFormat))), (is12Hour !== undefined && { hour12: is12Hour }));
    const dateAsLocaleString = new Date(dateProp).toLocaleString(locale, Object.assign(Object.assign({}, formatOptions), (hasTimeFormat && { timeStyle: timeFormat })));
    const defaultDisplay = `${dateAsLocaleString}${displaySuffix ? ' ' + displaySuffix : ''}`;
    const utcTimeFormat = timeFormat !== 'short' ? 'medium' : 'short';
    const convertToUTCString = (date) => new Date(date).toUTCString().slice(0, -3);
    const utcDateString = new Date(convertToUTCString(dateProp)).toLocaleString(locale, Object.assign(Object.assign({}, formatOptions), (hasTimeFormat && { timeStyle: utcTimeFormat })));
    const defaultTooltipContent = `${utcDateString}${(tooltip === null || tooltip === void 0 ? void 0 : tooltip.suffix) ? ' ' + tooltip.suffix : ' UTC'}`;
    const timestamp = (React.createElement("span", Object.assign({ className: css(styles.timestamp, tooltip && styles.modifiers.helpText, className) }, (tooltip && { tabIndex: 0 }), props),
        React.createElement("time", { className: "pf-c-timestamp__text", dateTime: props.dateTime || new Date(dateProp).toISOString() }, !children ? defaultDisplay : children)));
    return tooltip ? (React.createElement(Tooltip, Object.assign({ content: tooltip.variant === TimestampTooltipVariant.default ? defaultTooltipContent : tooltip.content }, tooltip.tooltipProps), timestamp)) : (timestamp);
};
Timestamp.displayName = 'Timestamp';
//# sourceMappingURL=Timestamp.js.map