declare const _sfc_main: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    controlClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    errors: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    formControlClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: () => any;
    };
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicator: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    invalid: BooleanConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    plaintext: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: undefined;
    };
    valid: BooleanConstructor;
}, unknown, {
    currentValue: string | number | unknown[] | Record<string, any> | undefined;
    hasChanged: boolean;
    hasFocus: boolean;
    isDirty: boolean;
    isEmpty: boolean;
}, {
    id(): string | undefined;
    componentName(): any;
    formGroupClasses(): {
        [x: number]: boolean;
        animated: any;
        'has-activity': any;
        'has-changed': any;
        'has-focus': any;
        'has-icon': boolean;
        'is-dirty': any;
        'is-empty': any;
        'is-invalid': boolean;
        'is-valid': boolean;
    } & (false | {
        [x: string]: boolean;
    });
    controlAttributes(): any;
    controlClasses(): any;
    controlSizeClass(): string;
    invalidFeedback(): any;
    validFeedback(): any;
    plaintextClass(): "form-control-plaintext";
}, {
    blur(): void;
    focus(): void;
    getFieldErrors(): any;
}, import("vue").DefineComponent<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    shadowableClass(): {
        [x: string]: boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    shadow: string | boolean;
    dropShadow: string | boolean;
    dropShadowableClassPrefix: string;
    shadowableClassPrefix: string;
}>, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "progress" | "paste" | "update:modelValue")[], "focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "progress" | "paste" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    controlClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    errors: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    formControlClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: () => any;
    };
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    indicator: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    invalid: BooleanConstructor;
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    modelValue: {
        type: (StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    plaintext: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: undefined;
    };
    valid: BooleanConstructor;
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onPaste?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    activity: boolean;
    animated: boolean;
    controlClass: string | unknown[] | Record<string, any>;
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    formControlClass: string | unknown[] | Record<string, any>;
    helpText: string | number;
    indicator: string | boolean | Record<string, any>;
    indicatorSize: string;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: string | number | unknown[] | Record<string, any>;
    plaintext: boolean;
    size: string;
    valid: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
