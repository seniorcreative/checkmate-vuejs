<template>
  <section>
    <div class="notification">
      Notification here.
    </div>
    <section class="columns">
      <div class="column">Col 1</div>
      <div class="column">Col 2</div>
      <div class="column">Col 3</div>
      <div class="column">Col 4</div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  name: 'Welcome',
  components: {
    // HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
