<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name='acitons'></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead"
};
</script>
<style lang="scss" scoped>
.tabs-head {
}
</style>