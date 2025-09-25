<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  /**
   * The label of the button
   */
  label?: string;
  /**
   * type of the button
   */
  stylingType?: 'primary' | 'secondary' | 'success' | 'danger';
  /**
   * styling of the button
   */
  stylingMode?: 'contained' | 'outlined' | 'text';
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * shapes of the button
   */
  circle?: boolean;
  round?: boolean;
  rect?: boolean;
  /**
   * background color of the button
   */
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
});

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'l-button': true,
  [`l-button--${props.stylingType}`]: !!props.stylingType,
  [`l-button--${props.stylingMode || 'contained'}`]: true,
  [`l-button--${props.size || 'medium'}`]: true,
  [`l-button--circle`]: props.circle === true,
  [`l-button--round`]: props.round === true,
  [`l-button--rect`]: props.rect === true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click', 1);
};
</script>

<template>
  <button
    type="button"
    :styling-type="stylingType"
    :styling-mode="stylingMode"
    :size="size"
    :circle="circle"
    :round="round"
    :rect="rect"
    :style="style"
    :class="classes"
    @click="onClick"
  >
    <div class="l-button__content">
      <span v-if="label" class="l-button__label">{{ label }}</span>
    </div>
  </button>
</template>

<style>
@import 'button';
</style>
