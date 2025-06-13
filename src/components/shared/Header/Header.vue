<script setup lang="ts">
import Logo from '@/assets/logo.svg'
</script>

<template>
  <header class="m-2 mb-5 p-3 border rounded-md flex justify-start gap-16">
    <div class="flex items-center gap-2">
      <img :src="Logo" class="h-12"/>
      <h1 class="text-3xl font-bold">Header Example</h1>
    </div>
  </header>
</template>