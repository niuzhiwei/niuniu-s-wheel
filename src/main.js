import Vue from "vue";
import Demo from "./demo.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");

// import Vue from 'vue'
// import Button from './button'
// import Icon from './icon'
// import ButtonGroup from './button-group'
// import Input from './input'
// import Row from './row'
// import Col from './col'
// import Layout from './layout'
// import Header from './header'
// import Sider from './sider'
// import Content from './content'
// import Footer from './footer'
// import Toast from './toast'
// import plugin from './plugin'
// import Tabs from './tabs'
// import TabsHead from './tabs-head'
// import TabsBody from './tabs-body'
// import TabsItem from './tabs-item'
// import TabsPane from './tabs-pane'
// import Popover from './popover'
// import Collapse from './collapse'
// import CollapseItem from './collapse-item'
// import Cascader from './cascader'
// Vue.component('g-button', Button)
// Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
// Vue.component('g-input', Input)
// Vue.component('g-row', Row)
// Vue.component('g-col', Col)
// Vue.component('g-layout', Layout)
// Vue.component('g-header', Header)
// Vue.component('g-sider', Sider)
// Vue.component('g-content', Content)
// Vue.component('g-footer', Footer)
// Vue.component('g-toast', Toast)
// Vue.use(plugin)
// Vue.component('g-tabs', Tabs)
// Vue.component('g-tabs-head', TabsHead)
// Vue.component('g-tabs-body', TabsBody)
// Vue.component('g-tabs-item', TabsItem)
// Vue.component('g-tabs-pane', TabsPane)
// Vue.component('g-popover', Popover)
// Vue.component('g-collapse', Collapse)
// Vue.component('g-collapse-item', CollapseItem)
// Vue.component('g-cascader', Cascader)
// new Vue({
//   el: '#app',
//   data: {
//     loading1: false,
//     loading2: true,
//     message: '测试input',
//     selectedTab: ['1', '2'],
//     source: [
//       {
//         name: '浙江',
//         children: [
//           {
//             name: '杭州',
//             children: [
//               { name: '上城' },
//               { name: '下城' },
//               { name: '江干' },
//               { name: '拱墅' },
//               { name: '西湖' },
//               { name: '滨江' },
//               { name: '萧山' }
//             ]
//           },
//           { name: '温州', children: [{ name: '南湖' }, { name: '秀洲' }, { name: '嘉善' }] }
//           // { name: '宁波' },
//           // { name: '嘉兴' },
//           // { name: '湖州' }
//         ]
//       },
//       {
//         name: '福建',
//         children: [{ name: '福州', children: [{ name: '鼓楼' }, { name: '台江' }, { name: '苍山' }] }]
//       }
//     ]
//   },
//   methods: {
//     inputChange(e) {
//       console.log(e)
//     },
//     showToast() {
//       this.$toast('很多文字很多文字', {
//         position: 'middle',
//         enableHtml: false,
//         autoClose: false,
//         closeButton: {
//           text: '知道了',
//           callback() {
//             console.log('用户说他知道了')
//           }
//         }
//       })
//     }
//   }
// })
