import ColorPicker from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@alex.dunn.adalyser/utils'

ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

const _ColorPicker = ColorPicker as SFCWithInstall<typeof ColorPicker>

export default _ColorPicker
export const ElColorPicker = _ColorPicker
