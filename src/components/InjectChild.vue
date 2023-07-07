<!-- in injector component -->
<script setup lang="ts">
import { inject } from 'vue'
import type { LocationProvider } from '@/types'

const locationProvider = inject<LocationProvider>('location')
const location = locationProvider?.location
const updateLocation = locationProvider?.updateLocation
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
