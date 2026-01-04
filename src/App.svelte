<script lang="ts">
  import Router from "svelte-spa-router";
  import { location } from "svelte-spa-router";
  
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./components/Home.svelte";
  import Showcase from "./components/Showcase.svelte";
  import Achievements from "./components/Achievements.svelte";
  import Contact from "./components/Contact.svelte";

  const routes = {
    '/': Home,
    '/showcase': Showcase,
    '/achievements': Achievements,
    '/contact': Contact,
  };

  // Scroll to top on route change
  $: if ($location) {
    window.scrollTo(0, 0);
  }
</script>

<div class="portfolio">
  <Navbar />
  <Router {routes} />
  <Footer />
</div>
