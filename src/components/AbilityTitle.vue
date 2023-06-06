<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="title">{{ title }}</div>
</template>

<style>
.title {
  font-size: 18px;
}
</style>
