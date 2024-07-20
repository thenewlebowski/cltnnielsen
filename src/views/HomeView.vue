<script setup lang="ts">
import { HomeContent, HomeHeader, HomeFooter } from '@/components'
</script>

<template>
  <main>
    <HomeHeader />
    <Suspense>
      <HomeContent />
    </Suspense>
    <HomeFooter />
  </main>
</template>
