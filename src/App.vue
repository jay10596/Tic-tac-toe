<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <TicTacToe />
  </div>
</template>

<script>
import './layouts/App.scss'
import TicTacToe from './components/TicTacToe.vue'

export default {
  name: 'App',
  components: {
    TicTacToe
  }
}
</script>

