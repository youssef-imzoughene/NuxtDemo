<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Détails</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in posts">
      <th scope="row">{{item.id}}</th>
      <td>{{item.title}}</td>
      <td>
        <nuxt-link :to="{name:'post-id',params:{id:item.id}}" :key="item.id">
          voir détails
        </nuxt-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      posts () {
        return this.$store.state.post.all
      }
    }
  }
</script>
