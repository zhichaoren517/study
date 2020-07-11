<template>
  <div id="app"  @click="aaa">
    <ac :x="x"></ac>
    <bc></bc>
  </div>
</template>

<script>
import ac from './components/a.vue'
import bc from './components/b.vue'

export default {
	name: 'App',
	data(){
		return {
			x :1
		}
	},
	methods:{
		aaa(){

		}
	},
	components: {
		ac,
		bc
	},
	beforeCreate() {
		console.log('beforeCreate')
	},
	created() {
		console.log('created')
	},
	beforeMount() {
		console.log('beforeMount')
	},
	mounted() {
		console.log( this , 'Vue' );
		debugger
		setTimeout(()=>{
			this.x = 5
		},2000)
		console.log('mounted')
	},
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
