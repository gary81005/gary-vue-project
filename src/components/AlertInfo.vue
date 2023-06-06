<script setup lang="ts">
defineProps<{ info: string; type: string }>()
</script>

<template>
  <el-alert :title="info" :type="type" effect="dark" />
</template>
