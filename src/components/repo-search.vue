<template>
  <div class="container">
    <h1>Repo Search</h1>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enter the repo name" v-model="reponame" v-on:keyup.enter="searchRepo()">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" v-on:click="searchRepo()">Search</button>
      </div>
    </div>

    <table class="table table-striped" v-if="response.length >= 1">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Stars</th>
          <th>Watchers</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(repo, key) in response">
          <th>{{ key + 1 }}</th>
          <td><a v-bind:href="'./#/user/' + repo.owner.login">{{ repo.owner.login }}</a>/<a v-bind:href="'./#/repo/' + repo.full_name">{{ repo.name }}</a></td>
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
  export default {
    data () {
      return {
        reponame: '',
        response: ''
      }
    },
    methods: {
      searchRepo() {
        if (this.reponame.length >= 4) {
          axios.get('https://api.github.com/search/repositories', {
              params: {
                q: this.reponame
              }
            }).then(response => {
            this.response = response.data.items;
          }).catch(error => {
            console.log(error);
          });
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
