<template>
  <div>
    <g-cascader
      :source="source"
      popover-height="200px"
      :selected.sync="selected"
      :load-data="loadData"
    ></g-cascader>
  </div>
</template>
<script>
import Cascader from "./cascader";
import db from "./db";

function ajax(parentId = 0) {
  return new Promise(success => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      success(result);
    }, 2000);
  });
}

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: []
      //   source: [
      //     {
      //       name: "浙江",
      //       children: [
      //         {
      //           name: "杭州",
      //           children: [
      //             { name: "上城" },
      //             { name: "下城" },
      //             { name: "江干" },
      //             { name: "拱墅" },
      //             { name: "西湖" },
      //             { name: "滨江" },
      //             { name: "萧山" }
      //           ]
      //         },
      //         {
      //           name: "温州",
      //           children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
      //         }
      //       ]
      //     },
      //     {
      //       name: "福建",
      //       children: [
      //         {
      //           name: "福州",
      //           children: [{ name: "鼓楼" }, { name: "台江" }, { name: "苍山" }]
      //         }
      //       ]
      //     }
      //   ]
    };
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  methods: {
    loadData(item, updateSource) {
      let { id } = item;
      ajax(id).then(result => {
        updateSource(result);
      });
    },
    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(
          item => item.id == this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
      });
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

:root {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}
</style>
