<template>
  <section>
    <div class="columns">
      <div class="column has-text-left">
        <h1 class="title is-2 has-text-centered">checkmate</h1>

        <div class="notification">This is a demo!</div>

        <section class="columns">
          <div class="column">
            <article class="message">
              <div class="message-header">
                <p>Hello World</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message">
              <div class="message-header">
                <p>Hello World</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message">
              <div class="message-header">
                <p>Hello World</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
