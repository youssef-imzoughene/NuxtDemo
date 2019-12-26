<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{ elem.title }}</h2>
      </div>
      <div class="col-12">
        <p>
          {{ elem.content }}
        </p>
      </div>
    </div>
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
