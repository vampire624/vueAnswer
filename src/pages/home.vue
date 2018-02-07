<template>
	<div>
		<container :fatherComponent="'home'"></container>
	</div>
</template>

<script>
import  Container from "@/components/container"
export default {
	name: "home",
	components: {
		Container
	},
	data () {
		return {

		}
	}
}
</script>

<style scoped>
	
</style>