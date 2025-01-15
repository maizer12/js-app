<script setup lang="ts">

</script>

<template>
<div class="w-screen min-h-screen relative">
  <app-header />
  <app-sidebar />
  <div class="w-full max-w-[calc(100vw-16rem)] ml-64 bg-background min-h-screen">
    <slot />
  </div>
</div>
</template>

<style scoped>

</style>