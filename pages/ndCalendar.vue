<style lang="less">
</style>
<template>
  <nd-layout>
     <div slot="body">
       <nd-calendar v-model="date" />
     </div>
  </nd-layout>
</template>
<script>
import ndLayout from "~/components/nd-layout";
import ndCalendar from "~/components/nd-calendar";
export default { 

  data() {
    return {
      date : ''
    }
  },

  components: {
    ndLayout,
    ndCalendar
  }
}
</script>

