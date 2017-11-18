<script>
import { mapGetters, mapMutations } from 'vuex';
import store from './store';
import ChildComponent from './components/ChildComponent.vue';

export default {
  store,
  components: { ChildComponent },

  methods: {
    ...mapMutations(['toggleLoaded']),
  },

  computed: {
    ...mapGetters({
      isLoaded: 'isLoaded',
    }),
  }
}

</script>

<template>
  <div id="app">
    <a href="javascript:" @click="toggleLoaded">Toggle loaded</a>

    <h3>Root component: </h3>
    <div>The loaded flag is: {{ isLoaded }}</div>

    <ChildComponent />
  </div>
</template>
