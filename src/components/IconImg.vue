<template>
  <component
    v-if="isComponent"
    :is="icon"
    :size="size"
    color="#f8fafc"
  />
  <img
    v-else
    :src="icon as string"
    :width="size"
    :height="size"
    alt="thumbnail"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getThumbnailIcon } from '@/main.ts'

const props = defineProps<{
  thumbnail: string,
  size?: number
}>()

const size = computed(() => props.size ?? 40);
const icon = computed(() => getThumbnailIcon(props.thumbnail))
const isComponent = computed(() => typeof icon.value !== 'string')
</script>
