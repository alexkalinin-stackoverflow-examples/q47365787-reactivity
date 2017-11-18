<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isLoaded: 'isLoaded', //accessing to same data, as root through single Vuex state
    }),
  }
}
</script>

<template>
  <div class="hello">
    <h3>Child component</h3>
    <div>The loaded flag is: {{ isLoaded }}</div>
  </div>
</template>
