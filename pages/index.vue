<template>
  <div class="">
    <FractionList
    v-for="(item, key, index) in fractionsList"
    :fractions="fractionsList[key]"
    :indexList="key"
    >
      
    </FractionList>
    <div 
    @click="fractionsListAdd"
    class="btn act">
      Добавить пример
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    watch: {

    },
    data() {
      return {
        testReact: 'noTest'
      }
    },
    computed: {
      ...mapGetters({
        fractions: 'fraction/fractions',
        fractionsList: 'fraction/fractionList'
      }),
      fratcionsListTemplate() {
        console.log(this.fractions)
        let newArr = this.fractions
        return newArr
      }
    },
    methods: {
      fractionsListAdd() {
        this.$store.commit('fraction/fractionListAdd')
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  
</style>
