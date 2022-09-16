import { ElInfiniteScroll } from '@alex.dunn.adalyser/components/infinite-scroll'
import { ElLoading } from '@alex.dunn.adalyser/components/loading'
import { ElMessage } from '@alex.dunn.adalyser/components/message'
import { ElMessageBox } from '@alex.dunn.adalyser/components/message-box'
import { ElNotification } from '@alex.dunn.adalyser/components/notification'
import { ElPopoverDirective } from '@alex.dunn.adalyser/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
