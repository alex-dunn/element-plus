import { buildProps } from '@alex.dunn.adalyser/utils'

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => [],
  },
} as const)
