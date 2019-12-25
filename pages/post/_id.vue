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
      posts: [
        {
          id: 'rouge',
          title: 'tortue',
          content:
            ' qui quod? Architecto atque dolor ea, inventore molestias nisi'
        },
        {
          id: 'bleu',
          title: 'loup',
          content:
            ' qui quod? Architecto atque dolor ea, inventore molestias nisi'
        },
        {
          id: 'vert',
          title: 'souris',
          content:
            ' qui quod? Architecto atque dolor ea, inventore molestias nisi'
        }
      ]
    }
  },
  computed: {
    elem() {
      return this.posts.find((post) => post.id === this.id)
    }
  }
}
</script>

<style scoped></style>
