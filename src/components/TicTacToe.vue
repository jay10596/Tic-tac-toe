<template>
  <div class="grid-container">
    <h1>{{ result }}</h1>

    <section>
      <div @click="makeMove(0,0)">{{ ticTacToe[0][0] }}</div>
      <div @click="makeMove(0,1)">{{ ticTacToe[0][1] }}</div>
      <div @click="makeMove(0,2)">{{ ticTacToe[0][2] }}</div>
    </section>

    <section>
      <div @click="makeMove(1,0)">{{ ticTacToe[1][0] }}</div>
      <div @click="makeMove(1,1)">{{ ticTacToe[1][1] }}</div>
      <div @click="makeMove(1,2)">{{ ticTacToe[1][2] }}</div>
    </section>

    <section>
      <div @click="makeMove(2,0)">{{ ticTacToe[2][0] }}</div>
      <div @click="makeMove(2,1)">{{ ticTacToe[2][1] }}</div>
      <div @click="makeMove(2,2)">{{ ticTacToe[2][2] }}</div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TicTacToe',
  props: ['msg'],
  computed: {
    ...mapGetters({
      ticTacToe: 'ticTacToe',
      result: 'result',
      gameOver: 'gameOver'
    }),
  },
  methods: {
    makeMove(row, col) {
      this.$store.dispatch('userMove', {row, col})
      if(!this.gameOver) {this.$store.dispatch('computerMove');}
    }
  }
}
</script>

