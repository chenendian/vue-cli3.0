<template>
  <div>
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="ajax">
      <div>{{today}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import http from '@/util/http'
import Api from '@/util/api'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: '我被点击了',
      today:''
    }
  },
  created() {
    http.post(Api.recommendToday, {}).then(res => {
			this.today = res.data;
		}).catch(err=>{
			console.log(err);
		});
  },
}
</script>
<style scoped>
.home >>> h1 {
  width: 7.5rem;
}
</style>


