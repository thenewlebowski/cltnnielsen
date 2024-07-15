<script setup lang="ts">
import { store } from '@/store'
import axios from 'axios'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

let contributions = await store().getContributions
</script>

<template>
  <CalendarHeatmap :values="contributions" :end-date="new Date()" :round="2" dark-mode />
</template>

<style scoped>
* {
  font-size: 0.5rem;
}
</style>
