<template>
  <div class="item">
    <div class="icon-wrapper">
      <component :is="prefix + name" :size="size" :colors="colors" :dark-mode="dark"></component>
    </div>
    <div class="infos">
      <div class="name">{{ 'I' + name }}</div>
    </div>
    <el-dropdown style="align-self: center" @command="onCommand">
      <div class="opt">
        <!-- <IMore :size="20"></IMore> -->
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>复制 Vue 代码</el-dropdown-item>
        <el-dropdown-item>复制 SVG 源码</el-dropdown-item>
        <el-dropdown-item>复制 iconfont 代码</el-dropdown-item>
        <el-dropdown-item divided></el-dropdown-item>
        <el-dropdown-item>下载 PNG 图片</el-dropdown-item>
        <el-dropdown-item>下载 iconfont </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    size: String,
    colors: Array,
    dark: Boolean,
    prefix: String,
  },
  methods: {
    onCommand() {
      this.$message.info('功能开发中 ~');
    },
  },
};
</script>

<style lang="less">
.item {
  border-radius: 4px;
  width: 200px;
  height: auto;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 5px #ccc;
  display: flex;

  .icon-wrapper {
    line-height: 0;
    border: 1px dashed #ccc;
    flex-shrink: 0;
  }

  .infos {
    margin-left: 10px;
    margin-right: 10px;
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .opt {
    align-self: center;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    background-color: #ccc;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px #999;
      background-color: #999;
    }
  }
}
</style>
