<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">VuexCounter</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          molestias eveniet maiores, asperiores fuga atque ut expedita
          exercitationem fugiat mollitia illo consequuntur officiis minus
          pariatur culpa modi aliquam aliquid quos.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card border border-light shadow-lg rounded">
          <div class="card-body">
            <p class="h3 display-3">{{ counterState.count }}</p>
            <button @click="clickIncrement()" class="btn btn-success m-1 p-1">
              Increment
            </button>
            <button @click="clickDecrement()" class="btn btn-danger m-1 p-1">
              Decrement
            </button>
            <button @click="clickIncrementBy()" class="btn btn-warning m-1 p-1">
              Increment By
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'VuexCounter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickIncrement() {
      this.$store.dispatch('counterModule/incCounter');
    },
    clickDecrement() {
      this.$store.dispatch('counterModule/decCounter');
    },
    clickIncrementBy(value) {
      this.$store.dispatch('counterModule/incCounterBy', { value: value });
    },
  },
  computed: mapGetters({
    counterState: 'getCounterState',
  }),
};
</script>

<style></style>
