<script setup lang="ts">
useHead({
  title: 'Login',
})
definePageMeta({
  layout: false,
})



</script>

<template>
  <main class="bg-background min-h-screen flex justify-center items-center">
    <div class="p-8 bg-background-secondary max-w-[460px] rounded-lg">
      <h2 class="text-3xl font-bold mb-4 text-white">Login</h2>
      <p class="text-gray-400 text-md mb-4">Please enter your email and password to log in:</p>
      <div class="mb-4">
        <label for="email" class="block text-gray-400 mb-2">Email:</label>
        <input type="email" id="email" class="w-full p-2 border border-gray-600 rounded-lg">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-400 mb-2">Password:</label>
        <input type="password" id="password" class="w-full p-2 border border-gray-600 rounded-lg">
      </div>
      <div class="flex justify-end mt-7">
        <AppButton
          label="Login"
          icon="pi pi-sign-in"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>