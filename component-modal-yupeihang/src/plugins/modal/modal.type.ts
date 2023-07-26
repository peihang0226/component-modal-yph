import { ComponentInternalInstance, VNode } from 'vue'

export interface ConfigType {
  icon?: string,
  close?: boolean,
  maskClose?: boolean,
  confirmText?: string,
  cancelText?: string,
  rootClassName?: string
}

export type IContent = string | ((h?: any) => VNode)

export interface IModalParams {
  title?: string,
  icon?: string,
  content: IContent,
  close?: boolean,
  maskClose?: boolean,
  confirmText?: string,
  cancelText?: string,
  rootClassName?: string,
  onConfirm?: () => Promise<void> | void,
  onCancel?: () => void
}
export interface IModal {
  confirm(params: IModalParams): void
}

export interface IInstance extends ComponentInternalInstance {
  _hub: {
    'on-cancel': () => void,
    'on-confirm': () => void
  }
}