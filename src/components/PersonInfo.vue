<script setup lang="ts">
import type { Data } from '@/types/PersonInfo'
import { computed, ref } from 'vue'

const props = defineProps<{ data: Data[] }>()
const sortedData = computed(() => {
  const compareAge = (a: Data, b: Data) => b.age - a.age
  return props.data.slice().sort(compareAge)
})
</script>

<template>
  <div v-for="item in sortedData" :key="item.name" class="info-container">
    <div class="column">
      <span>Name:</span>
      {{ item.name }}
    </div>
    <div class="column">
      <span>Age:</span>
      {{ item.age }}
    </div>
    <div class="column">
      <span>Gender:</span>
      {{ item.gender }}
    </div>
    <div class="column">
      <span>Position:</span>
      {{ item.position }}
    </div>
  </div>
</template>

<style>
.info-container {
  border: 1px solid;
  border-radius: 8px;
  margin: 8px;
}
.column {
  padding: 8px;
}
</style>
