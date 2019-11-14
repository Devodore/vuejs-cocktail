<template>
  <div class="home">
    <h1>Cocktails</h1>
    <Search/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search/Search.vue';

export default {
  name: 'home',
  components: {
    Search,
  },
};
</script>
