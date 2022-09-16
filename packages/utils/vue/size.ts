import { componentSizeMap } from '@alex.dunn.adalyser/constants'

import type { ComponentSize } from '@alex.dunn.adalyser/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
