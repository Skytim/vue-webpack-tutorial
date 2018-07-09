<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="rgb(64, 158, 255)"  text-color="#fff" active-text-color="#ffd04b">
  <el-menu-item index="1">Number Game</el-menu-item>
  <el-submenu index="1">
    <template slot="title">Resulting</template>
     <el-submenu index="1-1">
      <template slot="title">Resulting and Settlement Processing</template>
      <el-menu-item index="1-1-1">Keno</el-menu-item>
      <el-menu-item index="1-1-2">Lotto</el-menu-item>
    </el-submenu>
  </el-submenu>
</el-menu>
</template>

<script lang="ts" src="./Navbar.ts" /> 
