<template>
  <div>
    <h1>
      My ads page
    </h1>

    <br>
    1st set of big box
    <br>
    big box 1
    <br>
    <ClientOnly>
      <GptAd
        v-bind="BIGBOX1"
      />
    </ClientOnly>
    <br>
    big box 2
    <br>
    <ClientOnly>
      <GptAd
        v-bind="BIGBOX2"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const BIGBOX1 = {
  adUnit: 'HEG-BIGBOX1',
  size: '300x250,300x600',
}
const BIGBOX2 = {
  adUnit: 'HEG-BIGBOX2',
  size: '300x250,300x600',
}
</script>
