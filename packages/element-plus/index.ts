import installer from './defaults'
export * from '@alex.dunn.adalyser/components'
export * from '@alex.dunn.adalyser/constants'
export * from '@alex.dunn.adalyser/directives'
export * from '@alex.dunn.adalyser/hooks'
export * from '@alex.dunn.adalyser/tokens'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
