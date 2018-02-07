<template>
	<div>
		<container :fatherComponent="'item'"></container>
	</div>
</template>

<script>
import Container from "@/components/container"
export default {
	name: "item",
	components: {
		Container
	},
	data () {
		return {

		}
	}
}
</script>