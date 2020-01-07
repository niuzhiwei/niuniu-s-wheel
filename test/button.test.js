const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    //测试按钮含有icon
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'thumbs-up'
      }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-thumbs-up')
    button.$el.remove()
    button.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'thumbs-up',
        loading: true
      }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
  })
  it('icon默认order是1.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'thumbs-up'
      }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
  })
  it('可以设置position.', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'thumbs-up',
        iconPosition: 'right'
      }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
  })
  it('点击button触发click事件.', () => {
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
      propsData: {
        icon: 'thumbs-up'
      }
    })
    button.$mount()
    const callback = sinon.fake()
    button.$on('click', callback)
    button.$el.click()
    expect(callback).to.have.been.called
  })
})
