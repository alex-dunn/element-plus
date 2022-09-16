import Tree from './src/tree.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@alex.dunn.adalyser/utils'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

const _Tree = Tree as SFCWithInstall<typeof Tree>

export default _Tree
export const ElTree = _Tree
