import Vuex from 'vuex'


export const state = () => ({
  fractionsTemplate: {
    "numerator": 5,
    "denominator":10
  },
  fractionListTemplate: [
    {
      "numerator": 5,
      "denominator":10
    }
  ],
  fractionsList: [],
  fractions: []
})

export const mutations = {
  fractionCreate(state) {

  },
  concatFraction(state,params) {

    state.fractionsList[params.indexList][params.index] = params.values
    // console.log(state.fractionsList[params.indexList][params.index])
  },
  fractionAdd(state, indexList) {
    console.log(state.fractionsList[indexList])
    state.fractionsList[indexList].push({
      
    })

    
  },
  fractionListAdd(state) {

    state.fractionsList.push(
      [
        {
          // "numerator": 5,
          // "denominator":10
        }
      ]
    )
    // this.$set(this.arr[0].foo, 'x', (this.arr[0].foo.x || 0) + 100)
  },
  fractionDelete(state,params) {
    console.log(params)
    // console.log(`indexList${indexList} index${index}`)
    state.fractionsList[params.indexList].splice(params.index,1)
    console.log(state.fractionsList[params.indexList])
    console.log(state.fractionsList)
  },
  fractionListDelete(state,indexList) {
    state.fractionsList.splice(indexList, 1)
    console.log(state.fractionsList)
  }
}

export const actions = {
  
}


export const getters = {
  fractions(state) {
    return state.fractions
  },
  fractionList(state) {
    return state.fractionsList
  }
}