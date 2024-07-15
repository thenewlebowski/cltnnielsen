<script setup lang="ts">
interface Props {
  content: string[]
}
const props = defineProps<Props>()
</script>

<template>
  <div class="tile-list">
    <div v-for="tile in props.content" :key="tile" class="tile bordered-text">{{ tile }}</div>
  </div>
</template>

<style scoped>
.tile-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tile {
  padding: 0.5rem 1rem;
  color: #6c8ead;
}
</style>
