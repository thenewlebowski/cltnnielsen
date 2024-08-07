<script setup lang="ts">
import { store } from '@/store'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
</script>

<template>
  <CalendarHeatmap
    :values="store().$state.contributions"
    :end-date="new Date()"
    :round="2"
    dark-mode
  />
</template>

<style scoped>
* {
  font-size: 0.5rem;
}
</style>
