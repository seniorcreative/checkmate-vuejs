<template>
  <section>
    <div class="columns">
      <div class="column is-4 is-offset-4 has-text-left">

        <h1 class="title is-2 has-text-centered">checkmate</h1>

        <div class="form-panel  has-text-left">
          <h3 class="subtitle is-5 has-text-left"><strong>Sign up for checkmate.</strong></h3>
          <p>Please enter your details below.</p>
          <form action style="margin-top: 30px">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" v-bind:class="{'is-danger': emailInvalid}" type="email" placeholder="Enter your email" v-model="email" required  >
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span v-if="emailInvalid" class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger" v-if="emailInvalid">The email is invalid</p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" v-bind:class="{'is-danger': passwordInvalid}" type="password" placeholder="Enter a password" minlength="8" maxlength="12" v-model="password" required>
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
                <span v-if="passwordInvalid" class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger" v-if="passwordInvalid">The password is invalid</p>
            </div>
            <hr>
            <div class="field is-grouped footer-buttons-right">
              <div class="control">
                <button type="button" class="button is-text" v-on:click="cancelSignup()">Cancel</button>
              </div>
              <div class="control">
                <!-- todo: Make the button disabled when in loading state -->
                <button type="button" class="button is-link" v-bind:class="{'is-loading': isLoading}" v-on:click="submitSignup()">Submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>


<script lang="ts">
import router from '../router';
import firebase from 'firebase';
import { Component, Vue, Model } from 'vue-property-decorator';

@Component
export default class Home extends Vue {

    private isLoading: boolean = false;
    private emailInvalid: boolean = false;
    private passwordInvalid: boolean = false;
    private email: string = '';
    private password: string = '';

    private emailTest: any = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    private submitSignup() {
        this.emailInvalid = this.passwordInvalid = false;

        /* Do a regExp test here for email pattern */
        if (!this.emailTest.test(this.email)) {
          this.emailInvalid = true;
          return;
        }

        if (this.password.length < 8 || this.password.length > 12) {
          this.passwordInvalid = true;
          return;
        }

        this.isLoading = true;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user: any) => {
            router.push({ path: '/thanks'});
          }, (error: any) => {
            this.isLoading = false;
            alert(`There's been an error: ${error}`);
          },
        );
    }

    private cancelSignup() {
      router.push({ path: '/'});
    }
}
</script>