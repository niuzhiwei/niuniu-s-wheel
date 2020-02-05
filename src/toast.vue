<template>
  <div
    class="toast"
    ref="wrapper"
    :class='toastClasses'
  >
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div
        v-else
        v-html="$slots.default[0]"
      ></div>
    </div>
    <div
      class="line"
      ref="line"
    ></div>
    <span
      class="close"
      v-if="closeButton"
      @click="onClickClose"
    >
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.wrapper.getBoundingClientRect().height + "px";
      });
    },
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.toast {
  animation: fadein 1s;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-height;
  position: fixed;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: #fff;
  padding: 0 16px;
  left: 50%;
  .message {
    padding: 8px 0;
  }
  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.close {
  padding-left: 16px;
  flex-shrink: 0;
}
.line {
  border-left: 1px solid #666;
  height: 100%;
  margin-left: 16px;
}
</style>