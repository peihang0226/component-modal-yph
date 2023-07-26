import type { App } from 'vue'
import Modal from '@/plugins/modal'

const useComponents = (app: App<Element>) => {
  app.use(Modal as any)
}

export default useComponents
