<!-- Please remove this file from your project -->
<template>
  <div class="season">{{text}}</div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data: function() {
      return {
          text:"",
      }
  },
  created: function(){
      const date = new Date();
      const month = date.getMonth();

      if(month <7){
          this.text ="夏ですね～"
      }else {
          this.text = "冬ですか…"
      }
  }
}
</script>
