<template>
  <div class="container">
    <h1>{{ response.login }}'s Profile</h1>
    <p class="lead">{{ response.bio }}</p>

    <div class="row">
      <div class="col-md-3">
        <img class="rounded" v-bind:src="response.avatar_url">
      </div>
      <div class="col-md-9">
        <div class="panel panel-default">
          <div class="panel-heading">
            <strong>{{ response.name }} - {{ response.login }} - <a v-bind:href="'./#/repo/' + response.login">View Repos</a> - <a v-bind:href="response.html_url" target="_blank">View GitHub Profile</a></strong>
          </div>
          <table class="table">
            <tr>
              <td>Name:</td>
              <td>{{ response.name }}</td>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{{ response.company }}</td>
            </tr>
            <tr>
              <td>Site:</td>
              <td><a v-bind:href="response.blog" target="_blank">{{ response.blog }}</a></td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{{ response.location }}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{{ response.email }}</td>
            </tr>
            <tr>
              <td>Bio:</td>
              <td>{{ response.bio }}</td>
            </tr>
            <tr>
              <td>Public Repos:</td>
              <td>{{ response.public_repos }}</td>
            </tr>
            <tr>
              <td>Public Gists:</td>
              <td>{{ response.public_gists }}</td>
            </tr>
            <tr>
              <td>Followers:</td>
              <td>{{ response.followers }}</td>
            </tr>
            <tr>
              <td>Following:</td>
              <td>{{ response.following }}</td>
            </tr>
            <tr>
              <td>Created Date:</td>
              <td>{{ response.created_at | moment('DD MMMM YYYY dddd HH:mm:ss') }}</td>
            </tr>
          </table>
        </div>
      </div>
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
        axios.get('https://api.github.com/users/' + this.$route.params.username).then(response => {
          this.response = response.data;
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
