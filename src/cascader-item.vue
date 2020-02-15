<template>
  <div class="x">
    {{sourceItem.name}}
    <gulu-cascader-item
      v-for="item in sourceItem.children"
      :key="item.index"
      :sourceItem='item'
    ></gulu-cascader-item>
  </div>
</template>
<script>
export default {
  name: "GuluCascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.x {
  border: 1px solid red;
  margin: 5px;
}
</style>