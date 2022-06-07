<!-- Please remove this file from your project -->
<template>
  <div id="progress">{{test}}</div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    test: {
      type: String,
      default: "デフォルト"
    }
  },
}
</script>
