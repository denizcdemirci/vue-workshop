<template>
  <div class="container">
    <h1>User Search</h1>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter the user name" v-model="username" v-on:keyup.enter="searchUser()">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" v-on:click="searchUser()">Search</button>
      </div>
    </div>

    <table class="table table-striped" v-if="total_count >= 1">
      <thead>
      <tr>
        <th>Avatar</th>
        <th>Username</th>
        <th>GitHub Profile</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in response">
        <td><img class="rounded" v-bind:src="user.avatar_url"></td>
        <td>{{ user.login }}</td>
        <td><a v-bind:href="user.html_url" target="_blank">Profile</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        username: '',
        total_count: 0,
        response: ''
      }
    },
    methods: {
      searchUser () {
        if (this.username.length >= 4) {
          axios.get('https://api.github.com/search/users?q=' + this.username).then(response => {
            this.response = response.data.items;
            this.total_count = response.data.total_count;
          }).catch(error => {
            console.log(error);
          })
        }
      }
    }
  }
</script>

<style scoped>
  table {
    margin-top: 30px;
  }
  .rounded {
    width: 24px;
  }
</style>
