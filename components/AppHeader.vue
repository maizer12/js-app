<script setup lang="ts">

</script>

<template>
  <header class="p-8 py-4 bg-background-secondary border-b border-gray-600 flex justify-between items-center sticky top-0 z-30">
    <div class="flex items-center gap-2">
      <div class="w-14 h-14 bg-background-hover rounded-full flex items-center justify-center">
        <i class="text-2xl text-white pi pi-user " />
      </div>
      <div class="flex gap-4 items-center">
        <div>
          <h5 class="font-bold text-white">Demo User</h5>
          <p class="text-gray-400">JavaScript Enthusiast</p>
        </div>
        <AppButton
            label="Logout"
            to="/login"
            variant="danger"
            size="sm"
        />
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="text-primary flex items-center gap-2">
        <i class="pi pi-trophy text-lg" />
        <h5>0 XP</h5>
      </div>
      <div class="text-primary flex items-center gap-2">
        <i class="pi pi-star text-lg" />
        <h5>0 Achievements</h5>
      </div>
      <p class="text-white p-1.5 px-2 bg-background-hover rounded-2xl text-sm">
        Level: 0
      </p>
    </div>
  </header>
</template>

<style scoped>

</style>