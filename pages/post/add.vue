<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Ajouter un projet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
          <div class="form-group">
            <label for="code">Code</label>
            <input type="text" v-model="id" class="form-control" id="code">
          </div>
          <div class="form-group">
            <label for="titre">Titre</label>
            <input type="text" v-model="title" class="form-control" id="titre">
          </div>
          <div class="form-group">
            <label for="details">Détails</label>
            <textarea class="form-control" v-model="content" id="details" rows="3"></textarea>
          </div>
          <a class="btn btn-primary" v-on:click="addProjet()" >Valider</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: '',
        content: '',
        title: ''
      }
    },
    methods: {
      addProjet () {
        this.$store.commit('post/add', {
          id:this.id,
          content : this.content,
          title:this.title
        });
      }
    }
  }
</script>
<style scoped>
  label{
    text-align: left !important;
  }
</style>
