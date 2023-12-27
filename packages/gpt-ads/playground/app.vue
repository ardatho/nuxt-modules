<template>
  <div>
    Nuxt module playground!
  </div>

  <br> 1st set of big box <br>
  big box 1
  <br>
  <client-only>
    <GptAd
      v-bind="gptAdOptions"
    />
  </client-only>
</template>

<script setup>
const gptAdOptions = {
  adUnit: 'HEG-BIGBOX1',
  size: '300x250,300x600',
}
</script>
