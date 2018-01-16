<style lang="less">
</style>
<template>
  <nd-layout>
     <div slot="body">
       <nd-select v-model="city" placeholder="请选择">
           <nd-option v-for="(option,index) in options" :key="index" :label="option.name" :value="option.id"></nd-option>
       </nd-select>
     </div>
  </nd-layout>
</template>
<script>
import ndLayout from "~/components/nd-layout";
import ndSelect from "~/components/nd-select";
import ndOption from "~/components/nd-option";
export default { 

  data() {
      return {
          options : [
              {name:'成都',id:1},
              {name:'北京',id:2},
              {name:'上海',id:3}
          ],
          city: ""
      }
  },

  components: {
    ndLayout,
    ndSelect,
    ndOption
  }
}
</script>

