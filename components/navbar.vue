<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand"><nuxt-link to="/">Devcorp</nuxt-link></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link">
            <nuxt-link to="/">Accueil</nuxt-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <nuxt-link to="/articles">Projets</nuxt-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <nuxt-link to="/post/add">Ajouter un projet</nuxt-link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped></style>
