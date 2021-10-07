<template>
	<div class="fraction">
		<div class="fraction-item__delete">
			
		</div>
		<input 
		 	class="fraction-item denominator"
		    maxlength="2" 
		    type="text" 
		    v-model="numeratorVal"
		    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
		>
		<input 
		 	class="fraction-item denominator"
		    maxlength="2" 
		    type="text" 
		    v-model="denominatorVal"
		    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
		>
	</div>
</template>

<script>
	export default {
		watch: {
			numeratorVal(val) {
				this.numeratorVal = +val
			},
			denominatorVal(val) {
				this.denominatorVal = +val
			}
		},
		props: {
			numerator: 0,
			denominator: 0
		},
		data() {
			return {
				numeratorVal: this.numerator,
				denominatorVal: this.denominator
			}
		},

	}
</script>

<style >
	html {
		
	}
	.fraction {
		display: inline-flex;
		flex-direction: column;

	}

	.fraction-item {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 4rem;
	}

	.fraction-item.numerator {
		border-bottom: 1px solid #000000;
		padding-bottom: 1rem;
	}

</style>

