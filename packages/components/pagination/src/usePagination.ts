import { inject } from 'vue'
import { elPaginationKey } from '@alex.dunn.adalyser/tokens'

export const usePagination = () => inject(elPaginationKey, {})
