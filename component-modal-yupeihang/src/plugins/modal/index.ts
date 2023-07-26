// 入口

import { App, createVNode, render } from 'vue'
import Modal from './Modal.vue'
import { ConfigType, IInstance, IModal } from './modal.type'
import config from './config'

Modal.install = (app: App, options: ConfigType = {}) => {
  // 合并配置信息
  Object.assign(config, options || {})

  // 注册全局组件
  app.component(Modal.name, Modal)

  // 注册全局事件
  app.config.globalProperties.$modal = {
    confirm({
      title = '',
      icon = 'none',
      content = '',
      close = config!.close,
      maskClose = config!.maskClose,
      confirmText = config!.confirmText,
      cancelText = config!.cancelText,
      rootClassName = config!.rootClassName || '',
      onConfirm,
      onCancel
    }) {
      const container = document.createElement('div')
      container.className = rootClassName
      const vnode = createVNode(Modal)
      render(vnode, container)
      const instance = vnode.component as IInstance
      document.body.appendChild(container)

      const { props, _hub } = instance

      const _closeModal = () => {
        props.modelValue = false
        container.parentNode!.removeChild(container)
      }

      Object.assign(_hub, {
        t: app.config.globalProperties.$t,
        async 'on-confirm'() {
          if (onConfirm) {
            const fn: any = onConfirm()
            if (fn && fn.then) {
              try {
                props.loading = true
                await fn
                props.loading = false
                _closeModal()
              } catch (err) {
                // 发生错误时，不关闭弹框
                props.loading = false
              }
            } else {
              _closeModal()
            }
          } else {
            _closeModal()
          }
        },
        'on-cancel'() {
          onCancel && onCancel()
          _closeModal()
        }
      })

      Object.assign(props, {
        isTeleport: false,
        modelValue: true,
        title,
        icon,
        content,
        close,
        maskClose,
        confirmText,
        cancelText
      })
    }
  } as IModal
}
export default Modal