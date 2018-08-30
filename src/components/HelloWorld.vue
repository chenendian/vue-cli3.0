<template>
  <div class="hello">
    <h1 @click="alertMsg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    alertToast: function() {
      this.$toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      })
    },
    alertMsg: function() {
      this.$messagebox.confirm('确定执行此操作?').then(() => {
        this.$toast('你点击了确认')
      }).catch(() => {
        this.$toast('你点击了取消')
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
