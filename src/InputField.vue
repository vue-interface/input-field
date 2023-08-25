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
                        v-if="activity && indicator"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize" />
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