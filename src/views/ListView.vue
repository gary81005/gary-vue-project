<script setup lang="ts">
import PersonInfo from '@/components/PersonInfo.vue'
</script>

<template>
  <div class="container">
    <div class="demo-title">Demo 👇</div>
    <PersonInfo
      :data="[
        { name: 'Gary', age: 29, gender: 'male', position: 'RD' },
        { name: 'Amber', age: 30, gender: 'female', position: 'QA' },
        { name: 'Ian', age: 32, gender: 'male', position: 'UI' },
        { name: 'Crystal', age: 35, gender: 'female', position: 'Lead' }
      ]"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.active {
  color: green;
}
.text-danger {
  color: red;
}
</style>
