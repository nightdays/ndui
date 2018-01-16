<style lang="less">
.mt-20{
  margin-top: 20px;
}
</style>
<template>
  <nd-layout>
     <div slot="body">
            <nd-table class="mt-30" :items="items">
                <nd-table-column prop="realname" label="员工姓名"  />
                <nd-table-column prop="gender" label="性别">
                    <template slot-scope="item">
                        <span v-if="item.gender==0">未设置</span>
                        <span v-if="item.gender==1">男</span>
                        <span v-if="item.gender==2">女</span>
                    </template>
                </nd-table-column>
            </nd-table>

            <nd-page v-model="page" class="mt-20"  :total="31" />

     </div>
  </nd-layout>
</template>
<script>
import ndLayout from "~/components/nd-layout";
import ndTable from "~/components/nd-table";
import ndTableColumn from "~/components/nd-table-column";
import ndPage from  "~/components/nd-page";
export default { 
  data() {
    return {
      items: [{
        realname:'小明',
        gender: 1
      },{
        realname:'小王',
        gender: 2
      }],
      page: 1
    }
  },
  components: {
    ndLayout,
    ndTable,
    ndTableColumn,
    ndPage
  }
}
</script>

