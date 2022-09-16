import { buildProps } from '@alex.dunn.adalyser/utils'

import type { ExtractPropTypes } from 'vue'

export const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5,
  },
} as const)

export type UsePopperArrowProps = ExtractPropTypes<typeof usePopperArrowProps>
