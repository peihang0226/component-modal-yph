<script setup lang="ts">
import Modal from './Modal.vue'
import { reactive, ref } from 'vue'
defineProps<{ msg: string }>()
let modalData = reactive({
  title: 'test',
  content: 'sdanasdnjkasnjkasdjknasdjnk'
})
let showModal = ref()
function show(){
  showModal.value = true
  modalData = {
    title: 'test2',
    content: '---------222222-----------------'
  }
}
function cancle() {
  showModal.value = false
}
</script>

<template>
  <div class="card">
    <button type="button" @click="show()">count is</button>
    <Modal :modalData="modalData" :showModal="showModal" @cancel="cancle()"></Modal>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
