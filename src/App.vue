<template>
  <div id="app">
    <nav id="nav">
     <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li v-for="destination in destinations"
      :key="destination.name"
      class="links">
        <router-link :to="{ name: 'destinationDetails', params: {slug: destination.slug}}"> 
          {{destination.name}} 
        </router-link>
      </li>
     </ul>
    </nav>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import store from "@/store";
export default{
  data(){
    return {
      destinations: store.destinations
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
</style>
