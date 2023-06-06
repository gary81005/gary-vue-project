<script setup lang="ts">
import type { Hero } from '@/services/types'

defineProps<{ hero: Hero; isSelected: boolean }>()
</script>

<template>
  <el-card
    shadow="hover"
    :class="isSelected ? 'trash' : 'card'"
    :body-style="{ display: 'flex', flexDirection: 'column' }"
  >
    <img :src="hero.image" class="image" />

    <span> {{ hero.name }} </span>
  </el-card>
</template>

<style lang="scss">
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trash {
  max-width: 344px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  .el-card__body {
    background-color: lightskyblue;
  }
}

.card {
  max-width: 344px;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.image {
  height: 100%;
  width: 100%;
  display: block;
}
</style>
