<template>
  <div class="container">
    <h1>Repo Search</h1>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter the repo name" v-model="reponame" v-on:keyup.enter="searchRepo()">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" v-on:click="searchRepo()">Search</button>
      </div>
    </div>

    <table class="table table-striped" v-if="total_count >= 1">
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Stars</th>
        <th>Watchers</th>
        <th>Language</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="repo in response">
        <td>{{ repo.owner.login }}/{{ repo.name }}</td>
        <td>{{ repo.description }}</td>
        <td>{{ repo.stargazers_count }}</td>
        <td>{{ repo.watchers_count }}</td>
        <td>{{ repo.language }}</td>
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
        reponame: '',
        total_count: 0,
        response: ''
      }
    },
    methods: {
      searchRepo () {
        if (this.reponame.length >= 4) {
          axios.get('https://api.github.com/search/repositories?q=' + this.reponame).then(response => {
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
</style>
