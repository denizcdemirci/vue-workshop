<template>
  <div class="container">
    <h1>{{ $route.params.username }}'s repositories</h1>

    <table class="table table-striped" style="margin-top: 30px">
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
        response: ''
      }
    },
    created: function() {
      this.getRoutesName();
    },
    methods: {
      getRoutesName() {
        axios.get('https://api.github.com/users/' + this.$route.params.username + '/repos').then(response => {
          this.response = response.data;
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
