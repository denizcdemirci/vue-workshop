<template>
  <div class="container">
    <h1>{{ response.full_name }}</h1>
    <p class="lead">{{ response.description }}</p>

    <div class="panel panel-default">
      <div class="panel-heading">
        <strong><a v-bind:href="'./#/user/' + $route.params.username">{{ $route.params.username }}</a>/{{ response.name }} - <a v-bind:href="response.html_url" target="_blank">View on GitHub</a></strong>
      </div>
      <table class="table">
        <tr>
          <td>Name:</td>
          <td>{{ response.name }}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{{ response.description }}</td>
        </tr>
        <tr>
          <td>Owner Username:</td>
          <td><a v-bind:href="'./#/user/' + $route.params.username">{{ $route.params.username }}</a></td>
        </tr>
        <tr>
          <td>Created Date:</td>
          <td>{{ response.created_at | moment('DD.MM.YYYY HH:mm:ss') }}</td>
        </tr>
        <tr>
          <td>Update Date:</td>
          <td>{{ response.updated_at | moment('DD.MM.YYYY HH:mm:ss') }}</td>
        </tr>
        <tr>
          <td>Size:</td>
          <td>{{ response.size }}</td>
        </tr>
        <tr>
          <td>Star:</td>
          <td>{{ response.stargazers_count }}</td>
        </tr>
        <tr>
          <td>Watchers:</td>
          <td>{{ response.watchers_count }}</td>
        </tr>
        <tr>
          <td>Forks:</td>
          <td>{{ response.forks_count }}</td>
        </tr>
        <tr>
          <td>Language:</td>
          <td>{{ response.language }}</td>
        </tr>
        <tr>
          <td>Open Issues:</td>
          <td>{{ response.open_issues }}</td>
        </tr>
        <tr>
          <td>Default Branch:</td>
          <td>{{ response.default_branch }}</td>
        </tr>
        <tr>
          <td>Clone Url:</td>
          <td><input type="text" class="form-control form-control-sm" v-model="response.clone_url"></td>
        </tr>
      </table>
    </div>
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
        axios.get('https://api.github.com/repos/' + this.$route.params.username + '/' + this.$route.params.reponame).then(response => {
          this.response = response.data;
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
