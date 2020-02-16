<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("addSelected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("removeSelected", name => {
      let index = this.selected.indexOf(name);
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy.splice(index, 1);
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
  }
};
</script>
<style lang="scss" scoped>
$gray: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $gray;
  //   border-bottom: none;
  border-radius: $border-radius;
}
</style>
