<template>
  <div class="fraction">
    <div class="fraction-list">
      <Fraction
      v-for="(item,index,key) in fractions"
      :numerator='item.numerator'
      :denominator="item.denominator"
      :item="item"
      :index="index"
      :indexList="indexList"
      @newNum="newNum"
      @newDen="newDen"
      >
        <span 
        v-if="index + 1 != fractions.length"
        slot="operator" class="fraction-list__symbol">
        +
        </span>
      </Fraction>
      
      
    </div>

    <div 
    @click="saveFractionList()"
    class="fraction-list__btn btn">
      Сохранить дробь
    </div>

    <div 
    @click="fractionAdd(indexList)"
    class="fraction-list__btn btn act">
      Добавить дробь
    </div>

    <div 
    @click="fractionListDelete(indexList)"
    class="fraction-list__btn btn red">
      Удалить 
    </div>

    

  </div>
</template>

<script>


import { mapGetters } from 'vuex'

export default {
  props: {
    fractions: [],
    indexList: 0
  },
  watch: {
    fractions: {
      handler: function (val, oldVal) {
        console.log('a thing changed')
      },
      deep: true
    }
    
  },
  data() {
    return {
      newNumVal: 0,
      newDenVal: 0
    }
  },
  computed: {
    ...mapGetters({
      
    }),
    getValueFraction() {
      let items = this.fractions
      
      return this.fractions
    },
    computedFraction() {
      console.log(this.fractions)
      function computed(obj) {
        console.log(obj)
      }
      computed(...this.fractions)
    },
    newValueForCom() {
      
      return testArr
    }
  },
  methods: {
    fractionAdd: function(indexList) {
        console.log(this.indexList)
        this.$store.commit('fraction/fractionAdd', this.indexList)
        // this.$emit('addFraction')
        this.$nextTick()
        this.$forceUpdate();
    },

    fractionListDelete: function(indexList) {
        console.log(this.indexList)
        this.$store.commit('fraction/fractionListDelete', this.indexList)
        // this.$emit('addFraction')
        this.$nextTick()
        this.$forceUpdate();
    },
    newNum(val) {

      this.newNumVal = val
      console.log(val)
    },
    newDen(val) {
      this.newDenVal = val
      console.log(val)
    },
    saveFractionList() {
      let testArr = []
      this.fractions.forEach((item) => {
        let numerator = item.numeratorVal
        let denominator = item.denominatorVal
        
        testArr.push(item)
      })
      console.log(testArr)
    }
  },
  mounted() {
    this.$store.commit('fraction/fractionCreate')
  }
}
</script>

<style lang="scss">
  
  .row {
    display: flex;  
  }
  .fraction {
    &-list {
      display: flex;
      align-items: center;
      &__symbol {
        margin: 0 1rem;
      }
    }
  }
</style>
