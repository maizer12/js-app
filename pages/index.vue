<script setup lang="ts">
import {definePageMeta} from "#imports";

const lessons = [
  { title: "JavaScript Fundamentals", description: "Master variables, data types, and basic operations in JavaScript.", duration: "30 min", badge: "Beginner" },
  { title: "Advanced JavaScript", description: "Learn advanced topics like closures, event loop, and async programming.", duration: "45 min", badge: "Advanced" },
  { title: "Vue.js Basics", description: "Introduction to Vue.js and building your first components.", duration: "40 min", badge: "Beginner" },
  { title: "Vue Composition API", description: "Learn the new Composition API in Vue 3.", duration: "50 min", badge: "Intermediate" },
  { title: "State Management with Vuex", description: "Manage complex state with Vuex.", duration: "60 min", badge: "Intermediate" },
  { title: "TypeScript with Vue", description: "Integrate TypeScript in your Vue projects.", duration: "35 min", badge: "Advanced" },
  { title: "Building Forms in Vue", description: "Learn how to build and validate forms in Vue.", duration: "25 min", badge: "Beginner" },
  { title: "Routing with Vue Router", description: "Set up navigation and routes in your Vue app.", duration: "40 min", badge: "Intermediate" },
  { title: "Testing Vue Components", description: "Write unit tests for Vue components.", duration: "55 min", badge: "Advanced" },
  { title: "Deploying Vue Apps", description: "Learn how to deploy your Vue applications.", duration: "20 min", badge: "Beginner" },
]

useHead({
  title: 'JavaScript Mastery',
})
</script>

<template>
  <div class="p-8">
    <div class="flex gap-2 items-center mb-12">
      <h1 class="text-5xl text-yellow-400">JS</h1>
      <div>
        <h3 class="text-2xl font-bold text-white mb-1">JavaScript Master</h3>
        <p class="text-gray-400">Interactive JavaScript learning platform</p>
      </div>
    </div>
   <div class="grid grid-cols-10 gap-10">
     <div class="col-span-6">
       <h3 class="text-yellow-400 text-2xl mb-4">Recommend Lessons:</h3>
       <ul class="grid gap-y-8">
         <lesson-card v-for="lesson in lessons" :key="lesson.title" v-bind="lesson" />
       </ul>
     </div>
     <div class="col-span-4">
       <h3 class="text-yellow-400 text-2xl mb-4">Code Playground</h3>
       <code-playground />
     </div>
   </div>
  </div>
</template>

<style scoped>

</style>