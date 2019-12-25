<template>
  <div class="container">
    <h1 class="title">{{ elem.title }}</h1>
    <p>
      {{ elem.content }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    elem() {
      return this.$store.state.post.all.find((post) => post.id === this.id)
    }
  }
}
</script>

<style scoped></style>
