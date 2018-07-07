
<template>
 <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>


<script lang="ts" src="./ResultTable.ts">
</script>
<style>
.el-select{
  width: 120px;
}
.form{
    width: 140px;
}
</style>

