<template>
  <section>
    <div class="columns">
      <div class="column is-4 is-offset-4">

        <div class="signup">
          <h1 class="title is-2">checkmate</h1>
        </div>
        
        <div class="form-panel  has-text-left">
          <h3 class="subtitle is-5 has-text-left"><strong>Sign up as a user.</strong></h3>
          <p>You will receive a confirmation email</p>
          <form action style="margin-top: 30px">
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p class="help is-danger">This email is invalid</p>
            </div>
            <hr>
            <div class="field is-grouped footer-buttons-right">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
