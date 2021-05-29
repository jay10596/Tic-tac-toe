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
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined]
      ],
      result: 'Start The Game'
    }
  },
  created() {
    let [rowTotal, columnTotal, diagonalLeftTotal, diagonalRightTotal] = Array(3).fill(null);

    for(let row = 0; row < this.ticTacToe.length; row++) {
      for(let column = 0; column < this.ticTacToe.length; column++) {
        // Row
        rowTotal += this.ticTacToe[row][column]

        // Column
        columnTotal += this.ticTacToe[column][row]

        // Diagonal Left
        diagonalLeftTotal = this.ticTacToe[row][row]

        // Diagonal Right
        diagonalRightTotal += this.ticTacToe[row][this.ticTacToe.length - row - 1]
      }

      if (rowTotal == 3 || columnTotal == 3 || diagonalLeftTotal == 3 || diagonalRightTotal == 3) {
        this.result = 'Player 1 Winner'
      } else if (rowTotal == 0 || columnTotal == 0 || diagonalLeftTotal == 0 || diagonalRightTotal == 0) {
        this.result = 'Player 2 Winner'
      }
    }
  }
}
</script>

