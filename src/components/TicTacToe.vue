<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TicTacToe',
  props: ['msg'],
  data() {
    return {
      ticTacToe: [
        ['','',''],
        ['','',''],
        ['','','']
      ],
      result: 'Start The Game'
    }
  },
  created() {
    let [diagonalLeftTotal, diagonalRightTotal] = Array(2).fill('');

    for(let row = 0; row < this.ticTacToe.length; row++) {
      let [rowTotal, columnTotal] = Array(2).fill('');

      for(let column = 0; column < this.ticTacToe.length; column++) {
        // Row
        rowTotal += this.ticTacToe[row][column]

        // Column
        columnTotal += this.ticTacToe[column][row]
      }

      // Diagonal Left
      diagonalLeftTotal += this.ticTacToe[row][row]

      // Diagonal Right
      diagonalRightTotal += this.ticTacToe[row][this.ticTacToe.length - row - 1]

      if (rowTotal == '111' || columnTotal == '111' || diagonalLeftTotal == '111' || diagonalRightTotal == '111') {
        this.result = 'Player 1 Winner'
        break
      } else if (rowTotal == '222' || columnTotal == '222' || diagonalLeftTotal == '222' || diagonalRightTotal == '222') {
        this.result = 'Player 2 Winner'
        break
      }
    }
  }
}
</script>

