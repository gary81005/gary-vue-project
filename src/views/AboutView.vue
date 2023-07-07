<script setup lang="ts">
import InjectChild from '@/components/InjectChild.vue'
import type { LocationProvider } from '@/types'
import { inject } from 'vue'
import { provide, ref, watch } from 'vue'

const message = inject('message')
const location = ref('North Pole')
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

function updateLocation() {
  location.value = 'South Pole'
}

provide<LocationProvider>('location', {
  location,
  updateLocation,
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ message }}</h2>
    <InjectChild />
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
