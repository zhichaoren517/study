import Vue from "Vue"

let vm = new Vue({
    el: "#app",//挂载节点
    data(){
        return {
            msg:"hello",
            arr:[ 
                1,
                2,
                3,
                {
                    a:"11"
                }
            ] ,
            school:{
                name:"zf",
                age:10
            }
        }
    },
    methods:{

    },
    computed:{

    },
    watch:{

    }
})
// console.log( vm.arr = {a:1} );
setTimeout(() => {
    vm.school.name = "hsd"
}, 1000);
// console.log( vm , "vm" );
