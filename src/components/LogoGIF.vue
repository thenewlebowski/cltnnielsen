<script setup lang="ts">
interface Props {
  size?: number
}

const props = defineProps<Props>()
</script>

<template>
  <img
    src="https://storage.googleapis.com/cdn.hyperbolic.studio/videos/hyperbolic-logo.gif"
    class="logo"
    alt="hyperbolic studio logo"
    :height="props.size || 100"
    :width="props.size || 100"
  />
</template>

<style scoped>
.logo {
  display: inline;
  border-radius: 50px;
}
</style>
