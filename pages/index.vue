<template>
  <div class="">
    <Fraction
    :numerator='numerator'
    :denominator="denominator"
    ></Fraction>

  </div>
</template>

<script>
export default {
  watch: {

  },
  data() {
    return {
      numerator: 10,
      denominator: 100
    }
  },
  methods: {
    convertNumber(val) {
      console.log($event.target.value)
    }
  },
  mounted() {
    console.log(+'00')
  }
}
</script>

<style>
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.8rem;
    font-family: 'Open Sans',sans-serif;
    padding: 2rem 10rem;
  }
  * {
    box-sizing: border-box;
    padding:  0;
    margin: 0;
  }
  .row {
    display: flex;  
  }
</style>
