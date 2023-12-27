<template>
  <div>
    Nuxt module playground!
  </div>
  <h1>
    {{ $multisite.site.title }} - {{ $multisite.site.id }}
  </h1>
  <div class="background-primary">
    This is a primary background
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.background-primary {
  background-color: var(--primary-1);
}
</style>
