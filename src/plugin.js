import Toast from "./toast";
// helpers
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({
    propsData
  });
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("beforeClose", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
let currentToast;

export default {
  install(Vue) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null;
        }
      });
    };
  }
};
