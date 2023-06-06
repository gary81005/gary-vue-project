<script setup lang="ts">
import type { Hero } from '@/services/types'
import HeroCard from './HeroCard.vue'
import { ref } from 'vue'

const props = defineProps<{ heroId: string; list: Hero[]; onClick: (id: string) => void }>()

const nowSelect = ref<string | null>(null)

const handleClick = (id: string) => {
  nowSelect.value = id
  props.onClick(id)
}
</script>

<template>
  <el-container>
    <el-row :gutter="10">
      <el-col v-for="hero in list" :key="hero.id" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div @click="handleClick(hero.id)">
          <HeroCard :hero="hero" :isSelected="nowSelect === hero.id" />
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<style>
.container {
  display: flex;
}
</style>
