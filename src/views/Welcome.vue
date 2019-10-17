<template>
  <section>
    <div class="columns">
      <div class="column has-text-left">
        <h1 class="title is-2 has-text-centered">checkmate</h1>

        <div class="notification">This is a demo!</div>

        <section class="columns">
          <div class="column">Col 1</div>
          <div class="column">Col 2</div>
          <div class="column">Col 3</div>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
