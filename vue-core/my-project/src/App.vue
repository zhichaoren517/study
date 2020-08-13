<template>
	<div id="app">
		<!-- <Father >
			<div slot="footer">weiweiweiwei</div>
		</Father> -->
		<Father>
			<div slot="header" slot-scope="slotProps">{{slotProps}}</div>
			<div>zhongjian</div>
			<div slot="footer">weiweiweiwei</div>
		</Father>
	</div>
</template>

<script>
import Father from "./components/Father"
export default {
	name: 'App',
	components: {
		Father
	},
	created(){
		console.log(this);
		
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
