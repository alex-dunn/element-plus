import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@alex.dunn.adalyser/components/breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
