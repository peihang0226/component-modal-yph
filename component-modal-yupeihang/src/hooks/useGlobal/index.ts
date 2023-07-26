import { getCurrentInstance } from 'vue'

/* global ICurrentInstance */
export default function useGlobal() {
  const {
    appContext: {
      config: { globalProperties }
    }
  } = (getCurrentInstance() as unknown) as ICurrentInstance

  return globalProperties
}