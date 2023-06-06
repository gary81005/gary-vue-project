<script setup lang="ts">
import AbilitiesSetting from '@/components/AbilitiesSetting.vue'
import HeroCardList from '@/components/HeroCardList.vue'
import { getHeroProfile, getHeroesList } from '@/services/heroes'
import type { Abilities, Hero } from '@/services/types'
import { onMounted, ref } from 'vue'
const con = new AbortController()
const list = ref<Hero[]>([])
const heroId = ref<string | null>(null)
const abilities = ref<Abilities | null>(null)
const loading = ref(false)
onMounted(() => {
  getHeroesList<Hero[]>(con).then(({ data }) => {
    list.value = data
  })
})

const handleClick = (id: string) => {
  heroId.value = id
  loading.value = true
  getHeroProfile<Abilities>(id, con).then(({ data }) => {
    abilities.value = data
    loading.value = false
  })
}
</script>

<template>
  <main>
    <HeroCardList :heroId="''" :list="list" :onClick="handleClick" />
    <AbilitiesSetting
      v-loading="loading"
      v-show="Boolean(heroId)"
      :abilities="abilities"
      :heroId="heroId || ''"
    />
    <!-- {error && <AlertInfo alertOpen status="error" info="{error}" />} -->
  </main>
</template>

<style>
.el-loading-mask {
  z-index: 9;
}
</style>
