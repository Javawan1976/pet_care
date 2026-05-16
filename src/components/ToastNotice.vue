<script setup lang="ts">
defineProps<{
  message: string;
  show: boolean;
}>();
</script>

<template>
  <div class="toast" :class="{ show }" role="status" aria-live="polite">{{ message }}</div>
</template>
