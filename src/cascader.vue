<template>
  <div class="cascader">
    <div
      class="trigger"
      @click="popoverVisible = !popoverVisible"
    >
      {{result}}
    </div>
    <div
      class="popover-wrapper"
      v-if="popoverVisible"
    >
      <cascader-items
        :items="source"
        class="popover"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      popoverVisible: true
    };
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join("/");
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    height: $input-height;
    line-height: $input-height;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>
