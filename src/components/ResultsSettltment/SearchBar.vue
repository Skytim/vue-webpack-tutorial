<template>
<el-header >
  <el-row :gutter="20">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-col :span="3">
      <el-form-item label="Counter">
        <el-input v-model="formInline.user" placeholder="" class="form"></el-input>
      </el-form-item>
    </el-col >
    <el-col :span="2">
      <el-popover
        placement="bottom"
        title="Result Status"
        width="200"
        trigger="click">
        <template>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
        </template>
        <el-button slot="reference">click 激活</el-button>
      </el-popover>
    </el-col >
    <el-col :span="2">
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click">
        <template>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
          <el-row>
             <el-checkbox v-model="checked">备选项</el-checkbox>
          </el-row>
        </template>
        <el-button slot="reference">click 激活</el-button>
      </el-popover>
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
    <el-form-item style="float:right">
      <el-button type="primary"  @click="dialogTableVisible = true">AuditLog</el-button>
    </el-form-item>
    <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150"></el-table-column>
        <el-table-column property="name" label="Name" width="200"></el-table-column>
        <el-table-column property="address" label="Address"></el-table-column>
      </el-table>
    </el-dialog>
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

