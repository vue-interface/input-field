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
    group: {
        type: BooleanConstructor;
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
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    plaintext: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: undefined;
    };
    valid: BooleanConstructor;
}, unknown, {
    currentValue: null;
    hasChanged: boolean;
    hasFocus: boolean;
    isDirty: boolean;
}, {
    model: {
        get(): any;
        set(value: any): void;
    };
    id(): string | undefined;
    isEmpty(): boolean;
    isInvalid(): boolean;
    isValid(): boolean;
    componentName(): any;
    controlAttributes(): any;
    controlClasses(): any;
    controlSizeClass(): string;
    formGroupClasses(): {
        [x: number]: boolean;
        animated: any;
        'form-group': any;
        'has-activity': any;
        'has-changed': any;
        'has-focus': any;
        'has-icon': boolean;
        'is-dirty': any;
        'is-empty': any;
        'is-invalid': any;
        'is-valid': any;
    } & (false | {
        [x: string]: boolean;
    });
    plaintextClass(): "form-control-plaintext";
}, {
    bindEvents(el: HTMLElement): void;
    blur(): void;
    focus(): void;
    getFieldErrors(): any;
    getModelValue(): any;
    setModelValue(value: any): void;
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
    group: {
        type: BooleanConstructor;
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
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
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
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    activity: boolean;
    animated: boolean;
    controlClass: string | unknown[] | Record<string, any>;
    formControlClass: string | unknown[] | Record<string, any>;
    group: boolean;
    helpText: string | number;
    indicator: string | boolean | Record<string, any>;
    indicatorSize: string;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    plaintext: boolean;
    size: string;
    valid: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
