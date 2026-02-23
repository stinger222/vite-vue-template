<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0)
</script>

<template>
  <h1 class="text-2xl font-bold">よろしく!</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sapiente natus, magni rem amet quas eos
    veritatis nostrum, recusandae totam accusamus ut eius. Omnis, aliquid neque sequi magni ducimus iure?
  </p>
  <div class="mx-auto mt-5 flex flex-col w-fit">
    <span> Count: {{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>
