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
        result: 'Start The Game'
    },
    getters: {
        ticTacToe: state => {
            return state.ticTacToe
        },
        result: state => {
            return state.result
        }
    },
    actions: {
        makeMove ({commit}, position) {
            commit('setPosition', position)
            commit('setLogic')
        }
    },
    mutations: {
        setPosition (state, position) {
            state.ticTacToe[position['row']].splice(position['col'], 1, 'x')
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
                    state.result = 'Player 1 Winner'
                    break
                } else if (rowTotal == 'ooo' || columnTotal == 'ooo' || diagonalLeftTotal == 'ooo' || diagonalRightTotal == 'ooo') {
                    state.result = 'Player 2 Winner'
                    break
                }
            }
        }
    }
})
