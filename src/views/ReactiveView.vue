<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const state = reactive({ count: 0 })
const type = ref('C')
const message = ref('')
const awesome = ref(true)
const isActive = ref(true)
const hasError = ref(false)
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, { message: 'Hoo' }, { message: 'Aoo' }])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
function increment() {
  state.count++
}
</script>

<template>
  <div class="container">
    <p :class="{ active: isActive, 'text-danger': hasError }">Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <button @click="increment">
      {{ state.count }}
    </button>
    <br />
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
    <br />
    <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
    <br />
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
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
