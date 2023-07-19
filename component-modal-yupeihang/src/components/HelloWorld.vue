<script setup lang="ts">
import modal from '../plugins/modal/Modal.vue'
import { reactive, ref } from 'vue'
defineProps<{ msg: string }>()
let modalData = reactive({
  showModal: false,
  title: 'test',
  content: 'sdanasdnjkasnjkasdjknasdjnk'
})
function showModal(){
  modalData.showModal = true
}
</script>

<template>
  <div class="card">
    <button type="button" @click="showModal()">count is</button>
    <modal :modalData="modalData"></modal>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
