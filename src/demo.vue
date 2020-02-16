<template>
  <div>
    <g-cascader
      :source="source"
      popover-height="200px"
      :selected="selected"
      @update:selected="selected = $event"
    ></g-cascader>
  </div>
</template>
<script>
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                { name: "上城" },
                { name: "下城" },
                { name: "江干" },
                { name: "拱墅" },
                { name: "西湖" },
                { name: "滨江" },
                { name: "萧山" }
              ]
            },
            {
              name: "温州",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
            // { name: '宁波' },
            // { name: '嘉兴' },
            // { name: '湖州' }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "苍山" }]
            }
          ]
        }
      ]
    };
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
