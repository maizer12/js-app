<script setup lang="ts">
const navigation = [
  { name: 'Dashboard', icon: "pi pi-home", view: '' },
  // { name: 'Interview Questions', icon: "pi pi-question", view: 'interview-questions' },
  // { name: 'Lessons', icon: "pi pi-book", view: 'lessons' },
  // { name: 'Practice', icon: "pi pi-code", view: 'practice' },
  // { name: 'Achievements', icon: "pi pi-star", view: 'achievements' },
]
</script>

<template>
  <div class="flex flex-col w-64 bg-background-secondary text-white h-screen fixed">
    <div class="p-4">
      <h2 class="text-2xl font-bold flex items-center gap-2">
        <i class="h-6 w-6 pi pi-code" />
        JSMaster
      </h2>
    </div>
    <nav class="flex-1 p-4">
      <NuxtLink
      v-for="item in navigation"
      :to="{ 'name': item.view }"
      :key="item.name"
      class="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md mb-1 w-full text-left">
        <i :class="item.icon" />
        {{ item.name }}
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>

</style>