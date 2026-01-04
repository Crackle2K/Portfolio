<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<nav class="navbar">
  <div class="nav-content">
    <a href="/" use:link class="nav-link">Home</a>
    <a href="/showcase" use:link class="nav-link">Showcase</a>
    <a href="/achievements" use:link class="nav-link">Certifications</a>
    <a href="/contact" use:link class="nav-link">Contact</a>
  </div>
</nav>
