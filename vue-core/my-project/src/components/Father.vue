<template>
	<div class="container">
		<header>
			<slot name="header" :user="user">这里是header</slot>
		</header>
		<main>
			<slot :user="user"></slot>
		</main>
		<footer>
			<slot name="footer">这里是footer</slot>
		</footer>
	</div>
</template>
<script>
export default {
    data(){
		return {
			user:{
				createTime: 1595919528647,
				departmentId: 1694,
				name: "3454",
				parentDepartmentId: 999999,
				parentDepartmentName: "社交业务1",
			}
		}
	},
	created(){
		console.log(this);
		
	}
}
</script>
<style lang="">
    
</style>