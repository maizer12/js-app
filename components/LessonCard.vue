<template>
  <li class="border border-gray-600 bg-neutral-800 w-full text-white rounded-lg shadow-lg p-4">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <span :class="badgeClass" class="text-white px-2 py-1 rounded-full text-xs">{{ badge }}</span>
    </div>
    <p class="text-gray-400 mt-2 text-base">
      {{ description }}
    </p>
    <div class="mt-4 flex justify-between items-center">
      <div class="flex items-center text-gray-400 text-sm">
        <i class="pi pi-clock mr-2"></i>
        <span>{{ duration }}</span>
      </div>
      <button class="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400">
        <i class="pi pi-play-circle mr-2"></i> Start
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "LessonCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const badgeClass = computed(() => {
      switch (props.badge.toLowerCase()) {
        case "beginner":
          return "bg-green-500";
        case "intermediate":
          return "bg-blue-500";
        case "advanced":
          return "bg-red-500";
        default:
          return "bg-gray-500";
      }
    });

    return { badgeClass };
  },
});
</script>

<style scoped>
/**** Add any custom styles here if needed ****/
</style>
