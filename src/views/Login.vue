<template>

  <v-layout justify-center>

    <!-- ローディング -->
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="green">
    </v-progress-circular>

    <!-- ログイン画面 -->
    <v-card
      v-else>
      <v-card-title class="font-weight-bold">Googleアカウントでログイン</v-card-title>
      <v-card-actions>
        <v-layout justify-center>
          <v-btn
            color="success"
            @click="login">
            ログイン
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>

  </v-layout>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    login: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  },
  created () {
    this.isLoading = true
    firebase.auth().getRedirectResult().then((result) => {
      console.log('result:', result)
      if (result.user) {
        this.$router.push('home')
      } else {
        this.isLoading = false
      }
    }).catch((error) => {
      console.log('error:', error)
      this.isLoading = false
    })
  }
}
</script>
