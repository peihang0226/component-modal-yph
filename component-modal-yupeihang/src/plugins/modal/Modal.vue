<!-- 基础组件 -->

<template>
  <Teleport :to="props.getContainer">
    <!-- 蒙层 -->
    <div class="wrapper" v-if="props.showModal" @click="throwSet('cancel',$event)">
      <Transition>
        <div class="modal" :style="{width:props.width + 'px',zIndex:props.zIndex}">
          <div class="closeIcon" v-if="props.closable">x</div>
          <div class="title">
            {{ props.modalData.title }}
          </div>
          <div class="content">
            {{ props.modalData.content }}
          </div> 
          <div v-if="props.footer !== null">
            <div v-if="props.footer != ''" v-html="props.footer" class="footer"></div>
            <div class="footer" v-else>
              <button @click.stop="throwSet('cancel',$event)" ref="butCancel">{{ props.cancelText }}</button>
              <button @click.stop="throwSet('ok',$event)" ref="butOk">{{ props.okText }}</button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { withDefaults, watch, nextTick, defineProps, ref, getCurrentInstance } from 'vue'
import { modalProps } from "./config";
// let event:Event;
// let downEvent:Event;
// let n = 1;
// //弹框实例
// const models = ref();
//取消实例
const butCancel = ref();
//确定实例
const butOk = ref();
interface Props {
  showModal?: boolean,
  cancelText?: string, // 取消按钮文字
  closable?: boolean, // 是否显示关闭图标
  confirmLoading?: boolean,
  footer?: object | string,
  getContainer?: Element | string,
  wrapperClosable?: boolean, // 点击蒙层关闭modal
  modalData?: object,
  okText?: string,
  okType?: string,
  title?: string,
  content?: string,
  visible?: boolean,
  width?: string | number,
  wrapClassName?: string,
  zIndex?: number,
  dialogStyle?: object | string,
  dialogClass?: string
  autoFocusButton?:null | string,
}
const props = withDefaults(defineProps<Props>(), {
  ...modalProps
})
const emit = defineEmits([ 'ok', 'cancel'])
//向子组件抛事件的回调
function throwSet(type:any,$event:Event) {
  if(($event.target as HTMLInputElement).classList.contains('modal')) return
  if(($event.target as HTMLInputElement).classList.contains('wrapper')){
    if (!props.wrapperClosable) return
  }
  emit(type)
}

</script>
<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 200px;
  height: 200px;
  background: #fff;
  position: relative;
}
.closeIcon {
 position: absolute;
 right: 0;
 top: 0;
 font-size: 50px;
 line-height: 30px;
}
.footer{
    padding: 20px 20px 20px 0;
    border-top: 1px solid #e8e8e8;
    display: flex;
    justify-content: flex-end;
}
.footer>button{
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgba(0,0,0,.015);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
}
.footer>button:last-child{
    margin-left: 10px;
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
}
</style>