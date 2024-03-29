<script lang="ts">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputField',
    components: {
        ActivityIndicator
    },
    extends: FormControl
});
</script>

<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :class="labelClass"
                :for="id">
                {{ label }}
            </label>
        </slot>
        
        <div class="form-group-inner">
            <slot
                name="control"
                v-bind="{ bindEvents, controlAttributes }">
                <div
                    v-if="$slots.icon"
                    class="form-group-inner-icon"
                    @click="focus">
                    <slot name="icon" />
                </div>
                <input
                    ref="field"
                    v-model="model"
                    v-bind-events
                    v-bind="controlAttributes">
            </slot>

            <slot name="activity">
                <Transition name="input-field-fade">
                    <ActivityIndicator
                        v-if="activity"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize || size" />
                </Transition>
            </slot>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="$attrs.id"
                v-slot="{ error }"
                :name="$attrs.name"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>
        
        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<style>
.input-field,
.input-field .form-group-inner {
    position: relative;
    transition: all .25s ease-in-out;
}

.input-field .activity-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-1rem, -50%);
    transition: all .15s ease-in;
}

.input-field .activity-indicator-xs {
    font-size: .5em;
}

.input-field.has-activity .form-control-xs {
    padding-right: 3.75em;
}

.input-field .activity-indicator-sm {
    font-size: .5em;
}

.input-field.has-activity .form-control-sm {
    padding-right: 3em;
}

.input-field .activity-indicator-md {
    font-size: .666em;
}

.input-field.has-activity .form-control-md {
    padding-right: 3em;
}

.input-field .activity-indicator-lg {
    font-size: .75em;
}

.input-field.has-activity .form-control-lg {
    padding-right: 3em;
}

.input-field .activity-indicator-xl {
    font-size: 1em;
}

.input-field.has-activity .activity-indicator-xl ~ .form-control-xl {
    padding-right: 3.75em;
}

.input-field .activity-indicator {
    opacity: 1;
}

.input-field .input-field-fade-enter,
.input-field .input-field-fade-leave-to {
    opacity: 0;
}

.input-field.is-valid .valid-feedback,
.input-field.is-invalid .invalid-feedback {
    display: flex;
}

.input-field .form-control-icon {
    padding-left: 2em;
}

.input-field .form-group-inner-icon {
    position: absolute;
    top: 50%;
    left: .5em;
    width: 1em;
    font-size: 1.25em;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-field-sm .form-group-inner-icon {
    font-size: 1em;
}

.input-field-lg .form-group-inner-icon {
    left: .4em;
    font-size: 1.75em;
}
</style>
