<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.jv-container .jv-code.boxed{
  max-height: 100vh !important;
  
}
.app{
  height: 100vh;
  overflow: hidden;
}

.el-divider{
  margin: 10px !important;
  width: 80% !important;
}

.CodeMirror {
  height: 450px !important;
  padding-top: 15px;
}

.el-descriptions-item__label:not(.is-bordered-label) {
    margin-right: 10px;
    font-size: 13px;
    font-weight: bold;
    color: cadetblue;
}
</style>
