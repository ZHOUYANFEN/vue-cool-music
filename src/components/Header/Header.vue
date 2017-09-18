<template>
  <div class="header">
    <h1 class="text">Cool Music</h1>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~@/assets/scss/const.scss";

  .header{
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
  }
</style>
