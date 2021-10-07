<template>
	<div class="fraction-list__item">
		
		<div class="fraction-list__item-wrap">
			<div 
			@click="fractionDelete(index)"
			class="fraction-list__item-wrap__delete">
				<IconClose></IconClose>
			</div>
			<input 
		 	class="fraction-list__item-wrap__element numerator"
		    maxlength="2" 
		    type="text" 
		    v-model="numeratorVal"
		    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
			>
			<input 
		 	class="fraction-list__item-wrap__element denominator"
		    maxlength="2" 
		    type="text" 
		    v-model="denominatorVal"
		    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
			>
		</div>
		
		<slot name="operator">
			
		</slot>
	</div>
</template>

<script>
	export default {
		watch: {
			numeratorVal(val) {
				this.numeratorVal = +val

				let paramsFraction = {
					values: {
						"numeratorVal": this.numeratorVal,
						"denominatorVal": this.denominatorVal,
					},
					"indexList": this.indexList,
					"index": this.index
				}
				this.$store.commit('fraction/concatFraction', paramsFraction)
			},
			denominatorVal(val) {
				this.denominatorVal = +val

				let paramsFraction = {
					values: {
						"numeratorVal": this.numeratorVal,
						"denominatorVal": this.denominatorVal,
					},
					"indexList": this.indexList,
					"index": this.index
				}
				this.$store.commit('fraction/concatFraction', paramsFraction)
			}
		},
		props: {
			numerator: 0,
			denominator: 0,
			index: 0,
			item: {},
			indexList: 0
		},
		data() {
			return {
				numeratorVal: this.item.numerator,
				denominatorVal: this.item.denominator
			}
		},
		computed: {
			upValue() {
				let value = `${this.numeratorVal}/${this.denominatorVal}`
				 
				// this.$emit('upValue',value)
				
			}
		},
		methods: {
			fractionDelete(index) {
				let paramForDelete = {
					"indexList": this.indexList,
					"index": this.index
				}
				this.$store.commit('fraction/fractionDelete', paramForDelete)
				console.log()
			}
		}

	}
</script>

<style lang="scss" >
	

</style>

