const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
const REMEMBER_TIME = 'REMEMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
export default {
	[ADD_ITEMNUM](state, num){
		state.itemNum += num
	},
	[REMEMBER_ANSWER](state, id){
		state.answerId.push(id)
	},
	[REMEMBER_TIME](state){
		state.timer = setInterval(() => {
			state.allTime ++
		},1000)
	},
	[INITIALIZE_DATA](state){
		state.itemNum = 1
		state.allTime = 0
		state.answerId = []
	}
}
