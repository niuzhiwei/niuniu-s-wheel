<template>
  <div class="tabs-head">
    <slot></slot>
    <div
      class="line"
      ref="line"
    ></div>
    <div class="actions-wrapper">
      <slot name='acitons'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (item, vm) => {
      console.log(item);
      console.log(vm);
    });
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid red;
    width: 100px;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>