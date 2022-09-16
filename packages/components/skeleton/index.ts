import { withInstall, withNoopInstall } from '@alex.dunn.adalyser/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export const ElSkeletonItem = withNoopInstall(SkeletonItem)
export default ElSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
