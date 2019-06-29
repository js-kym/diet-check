<template>
  <div class="about">
    <div
      v-if="!isLogin"
      id="login">
      <h1>ログインページ</h1>
      <button @click="login">Googleアカウントでログイン</button>
    </div>
    <div
      v-else
      id="Home">
      <p>ログインしました！</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'app',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    login: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  },
  created () {
    firebase.auth().getRedirectResult().then((result) => {
      console.log('result:', result)
      if (result.user) {
        this.isLogin = true
      }
    }).catch((error) => {
      console.log('error:', error)
    })
  }
}
</script>
