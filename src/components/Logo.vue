<template>
  <div class="logo">
    <img :src="logo" :alt="alt" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',

  props: {
    logo: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'logo'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  padding: 24px 0 0;
  img {
    max-width: 180px;
  }
}
</style>
