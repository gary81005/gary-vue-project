<script setup lang="ts">
// @ts-nocheck
import { Plus, Minus } from '@element-plus/icons-vue'
import AbilityTitle from './AbilityTitle.vue'
import type { Abilities } from '@/services/types'
import { computed, onUpdated, ref } from 'vue'
import { updateHeroProfile } from '@/services/heroes'
import AlertInfo from './AlertInfo.vue'
import type { Message } from '@/types'
import { ElNotification } from 'element-plus'

const props = defineProps<{ heroId: string; abilities: Abilities | null }>()
const abilitiesState = ref<Abilities | null>(props.abilities)
const remain = ref<number>(0)
const info = ref<Message>({ msg: null, type: 'success' })
const disableAdd = computed(() => remain.value === 0)
const disableMinus = computed(() => (value: number) => value === 0)
const isSame = computed(() => {
  let check = true

  for (const [key, value] of Object.entries(abilitiesState.value)) {
    if (props.abilities[key] !== value) {
      check = false
      break
    }
  }
  return check
})

const handleAddClick = (key: string) => {
  abilitiesState.value = {
    ...abilitiesState.value,
    [key]: (abilitiesState.value?.[key] ?? 0) + 1,
  }
  remain.value -= 1
}

const handleMinusClick = (key: string) => {
  abilitiesState.value = {
    ...abilitiesState.value,
    [key]: (abilitiesState.value?.[key] ?? 0) - 1,
  }
  remain.value += 1
}

const handleSave = () => {
  if (remain.value > 0) {
    info.value.msg = '有數值未分配完畢，請檢察'
    info.value.type = 'warning'
  }

  if (abilitiesState.value) {
    info.value.msg = '更新成功'
    info.value.type = 'success'
    updateHeroProfile({ heroId: props.heroId, abilities: abilitiesState.value })
  }

  noti()
}

const noti = () => {
  ElNotification({
    title: '提示',
    message: info.value.msg,
    type: info.value.type,
  })
}

onUpdated(() => {
  abilitiesState.value = props.abilities
  remain.value = 0
})
</script>

<template>
  <el-container class="container">
    <div class="control-panel">
      <div class="ability" v-for="(value, key, index) in abilitiesState" :key="index">
        <AbilityTitle :title="key.toString()" />
        <el-button :disabled="disableAdd" :icon="Plus" @click="handleAddClick(key.toString())" />
        {{ value }}
        <el-button :disabled="disableMinus(value)" :icon="Minus" @click="handleMinusClick(key.toString())" />
      </div>
    </div>
    <div>
      <div>剩餘點數：{{ remain }}</div>
      <el-button :disabled="isSame" type="primary" @click="handleSave">Save</el-button>
    </div>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
}
.control-panel {
  display: flex;
  flex-direction: column;
  margin: 4px;
}
.ability:first-of-type {
  display: 'flex';
  // flex-direction: 'column';
  div {
    min-width: 80px;
    width: '30%';
  }
}
.ability:last-of-type {
  width: 160px;
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'end';
}
</style>
