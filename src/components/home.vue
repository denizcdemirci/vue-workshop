<template>
  <div class="container">
    <h1>{{ welcome }}</h1>
    <a v-bind:href="github.href" target="_blank">{{ github.text }}</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        welcome: 'You can search repo and user in GitHub!',
        github: {
          href: 'https://github.com/denizcdemirci/vue-workshop',
          text: 'View on GitHub'
        }
      }
    }
  }
</script>
