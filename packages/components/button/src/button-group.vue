<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@alex.dunn.adalyser/tokens'
import { useNamespace } from '@alex.dunn.adalyser/hooks'
import { buttonGroupProps } from './button-group'

defineOptions({
  name: 'ElButtonGroup',
})
const props = defineProps(buttonGroupProps)
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  })
)
const ns = useNamespace('button')
</script>
