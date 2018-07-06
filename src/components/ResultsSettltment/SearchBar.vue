
<template>
<el-form :inline="true" :model="formInline" class="demo-form-inline">

  <el-col :span="3">
  <el-form-item label="Counter" >
    <el-select v-model="formInline.region" placeholder="All" size="medium" width="100px">
      <el-option label="Benji" value="1"></el-option>
      <el-option label="Shani" value="2"></el-option>
    </el-select>
  </el-form-item>
  </el-col>
  <el-col :span="3">
  <el-form-item label="Draw.No">
    <el-input v-model="formInline.user" style="width:150px"></el-input>
  </el-form-item>
  </el-col>
<el-form-item>

<el-popover
  placement="bottom"
  title="标题"
  width="200"
  trigger="click">
  <el-button slot="reference">Result Status</el-button>
</el-popover>
<el-popover
  placement="bottom"
  title="标题"
  width="200"
  trigger="click">
  <el-button slot="reference">Settlement Status</el-button>
</el-popover>
  </el-form-item>
    <span class="demonstration">Date:</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
        <el-button type="primary" @click="onSubmit">Search</el-button>
         <el-checkbox v-model="checked">备选项</el-checkbox>
</el-form>
</template>


<script lang="ts" src="./SearchBar.ts">
</script>
<style>
.el-select .el-input {
  width: 150px;
}
</style>

