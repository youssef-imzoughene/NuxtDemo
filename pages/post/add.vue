<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Ajouter un projet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <form>
          <div class="form-group">
            <label for="code">Code</label>
            <input type="text" class="form-control" id="code">
          </div>
          <div class="form-group">
            <label for="titre">Titre</label>
            <input type="text" class="form-control" id="titre">
          </div>
          <div class="form-group">
            <label for="details">Détails</label>
            <textarea class="form-control" id="details" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Valider</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  label{
    text-align: left !important;
  }
</style>
