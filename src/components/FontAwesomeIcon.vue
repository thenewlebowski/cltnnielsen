<script setup lang="ts">
const props = defineProps<{ icon: string }>()
</script>

<template>
  <i :class="`fa-solid fa-${props.icon}`"></i>
</template>

<style scoped></style>
