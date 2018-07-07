<template>
<el-header >
  <el-row :gutter="20">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-col :span="3">
      <el-form-item label="Counter">
        <el-input v-model="formInline.user" placeholder="" class="form"></el-input>
      </el-form-item>
    </el-col >
    <el-col :span="3">
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-col >
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Search</el-button>
    </el-form-item>
  </el-form>
  </el-row>
</el-header>
</template>


<script lang="ts" src="./SearchBar.ts">
</script>
<style>
.el-select{
  width: 120px;
}
.form{
    width: 140px;
}
</style>

