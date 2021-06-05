import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ticTacToe: [
            ['','',''],
            ['','',''],
            ['','','']
        ],
        result: 'Start The Game',
        gameOver: false
    },
    getters: {
        ticTacToe: state => {
            return state.ticTacToe
        },
        result: state => {
            return state.result
        },
        gameOver: state => {
            return state.gameOver
        }
    },
    actions: {
        userMove ({commit}, position) {
            commit('setUserPosition', position)
            commit('setLogic')
        },
        computerMove ({commit}) {
            commit('setComputerPosition')
            commit('setLogic')
        }
    },
    mutations: {
        setUserPosition (state, position) {
            state.ticTacToe[position['row']].splice(position['col'], 1, 'x')
        },
        setComputerPosition (state) {
            for (;;) {
                let randomRow = Math.floor(Math.random() * 3)
                let randomCol = Math.floor(Math.random() * 3)

                if(state.ticTacToe[randomRow][randomCol] == '') {
                    state.ticTacToe[randomRow].splice(randomCol, 1, 'o')
                    break;
                }
            }
        },
        setLogic(state) {
            let [diagonalLeftTotal, diagonalRightTotal] = Array(2).fill('');

            for(let row = 0; row < state.ticTacToe.length; row++) {
                let [rowTotal, columnTotal] = Array(2).fill('');

                for(let column = 0; column < state.ticTacToe.length; column++) {
                    rowTotal += state.ticTacToe[row][column]
                    columnTotal += state.ticTacToe[column][row]
                }

                diagonalLeftTotal += state.ticTacToe[row][row]
                diagonalRightTotal += state.ticTacToe[row][state.ticTacToe.length - row - 1]

                if (rowTotal == 'xxx' || columnTotal == 'xxx' || diagonalLeftTotal == 'xxx' || diagonalRightTotal == 'xxx') {
                    state.gameOver = true
                    state.result = 'Player 1 Winner'
                    break
                } else if (rowTotal == 'ooo' || columnTotal == 'ooo' || diagonalLeftTotal == 'ooo' || diagonalRightTotal == 'ooo') {
                    state.gameOver = true
                    state.result = 'Player 2 Winner'
                    break
                }
            }
        }
    }
})
