


<template> <!-- html-->
  <div id="index">
    <p> {{msg}}</p>
    <input type="text" id="search" v-model="paras"  @click="search()">
     <li v-for="data in data" >
                {{ data.id }},   {{ data.name }}
    </li>
     <firstcomponent></firstcomponent>
  </div>
  
</template>



<script>
import firstcomponent from './component/firstcomponent.vue'


export default {
  name: 'index',
  data () {
    return {
      msg: '哈哈',
      data:[],
      paras:""
    }
  },
  components: { firstcomponent },
mounted: function () {
        this.$http.post('http://localhost:8080/demo/listDemo', {
					
				}).then(response => {
            console.log(response.data);
            this.data  =  response.data;
        }, response => {
            console.log("error");
        });
    },

methods:{
 search(){
				var _this=this
				_this.$http.post('http://localhost:8080/demo/listDemo', {
					name:this.paras
				}).then((suc) => {
           this.data  =  suc.data;
				})
			},
      }
   
}
</script>


<style>
#index {
  text-align: center;
  margin-top: 60px;
}
p {
  background: yellow;
}
</style>
