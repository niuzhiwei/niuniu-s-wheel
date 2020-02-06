const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', () => {
    it('接收autoClose', done => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })
    it('接收closeButton', done => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 1000)
    })
    it('接收enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接收position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
  describe('事件', () => {
    // const Constructor = Vue.extend(Input)
    // let vm = new Constructor({}).$mount()
    // const callback = sinon.fake()
    // afterEach(function() {
    //   vm.$destroy()
    // })
    // it('支持change/input/focus/blur事件', () => {
    //   ;['change', 'input', 'focus', 'blur'].forEach(eventName => {
    //     vm.$on(eventName, callback)
    //     //触发input的change事件
    //     var event = new Event(eventName)
    //     Object.defineProperty(event, 'target', { value: { value: 'hi' }, enumerable: true })
    //     let inputElement = vm.$el.querySelector('input')
    //     inputElement.dispatchEvent(event)
    //     expect(callback).to.have.been.calledWith('hi')
    //   })
    // })
  })
})
