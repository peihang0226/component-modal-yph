<!-- 基础组件 -->

<template>
  <Teleport to="body">
    <!-- 蒙层 -->
    <div class="wrapper">
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

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  height: 0;
  overflow: hidden;
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