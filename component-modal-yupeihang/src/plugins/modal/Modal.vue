<!-- 基础组件 -->

<template>
  <Teleport to="body">
    <!-- 蒙层 -->
    <div class="wrapper" v-if="props.showModal">
      <Transition>
        <div class="modal">
          <div class="title">
          {{ props.title }}
          </div>
          <div class="content">
            {{ props.content }}
          </div>
          <div class="footer">
            <button @click="throwSet('cancel',$event)" ref="butCancel">{{ props.cancelText }}</button>
            <button @click="throwSet('ok',$event)" ref="butOk">{{ props.okText }}</button>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, ref, getCurrentInstance } from 'vue'
// import {propsObj} from "../utils/config";
// let event:Event;
// let downEvent:Event;
// let n = 1;
// //弹框实例
// const models = ref();
//取消实例
const butCancel = ref();
//确定实例
const butOk = ref();
interface Model {
  showModal: boolean,
  cancelText?: string,
  closable?: boolean,
  confirmLoading?: boolean,
  footer?: object | string,
  forceRender?: boolean,
  getContainer?: Element | string,
  keyboard?: boolean,
  mask?: boolean,
  maskClosable?: boolean,
  maskStyle?: object,
  okText?: string,
  okType?: string,
  title?: string,
  visible?: boolean,
  width?: string | number,
  wrapClassName?: string,
  zIndex?: number,
  dialogStyle?: object | string,
  dialogClass?: string
  autoFocusButton?:null | string,
}
const props = withDefaults(defineProps<Model>(), {
  showModal: true
})
const emit = defineEmits([ 'ok', 'cancel'])
//向子组件抛事件的回调
function throwSet(type:any,$event:Event) {
  if(($event.target as HTMLInputElement).classList.contains('mask')){
    if (!props.maskClosable) return
  }
  event=$event
  emit(type)
}
// let configClose:any; // 保存离开时的实例
// //动画进入完成时的回调
// function onAfterEnter(){
//   configClose = new anitionsConfig(downEvent, models.value);
// }
// //监听动画离开回调
// function onLeave(){
//   configClose.moveScanner('out-mover','end');
// }
// //Modal 完全关闭后的回调
// function onAfterLeave(){
//   if(typeof props.afterClose == 'function'){
//     props.afterClose();
//   }
// }
</script>
<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  height: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 200px;
  height: 200px;
  background: #fff;
}

</style>