<template>
  <div>
    <div>てすと</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  validate ({store}) {
    const stepItems = store.getters['double']
    if(stepItems === 4){
      return true
    }else{
      return false
    }
  },
  head() {
        return {
            titleTemplate: '',
            title: `【Smyb引越し見積もり】引越し人数入力`,
            meta: [
                {hid: 'description',name: 'description',content: ''},
                {hid: 'og:title',property: 'og:title',content: '',},
                {hid: 'og:description',property: 'og:description',content: '',},
                {hid: 'robots',name: 'robots',content: 'noindex,nofollow'},
            ]
        }
    },
})
</script>
