<template>
  <div
    class="ac-color"
    :style="{ backgroundColor: color, color: textColor }"
    @click="copyColor"
  >
    <slot>{{ color }}</slot>
    <transition name="fade">
      <span v-if="copiedSuccess" class="copy-status">- copied -</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AcColor",
  props: {
    color: {
      type: String,
      required: true,
      validator(value) {
        // hexcolor validator
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
      },
    },
  },
  data() {
    return {
      copiedSuccess: false,
    };
  },
  computed: {
    textColor() {
      const hexCode =
        this.color.charAt(0) === "#" ? this.color.substr(1, 6) : this.color;

      const hexR = parseInt(hexCode.substr(0, 2), 16);
      const hexG = parseInt(hexCode.substr(2, 2), 16);
      const hexB = parseInt(hexCode.substr(4, 2), 16);
      // Gets the average value of the colors
      const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

      return contrastRatio >= 0.5 ? "#000" : "#fff";
    },
  },
  methods: {
    async copyColor() {
      await navigator.clipboard.writeText(this.color);
      this.copiedSuccess = true;
      setTimeout(() => (this.copiedSuccess = false), 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.ac-color {
  width: 500px;
  padding: px-to-rem(15px);
  border-radius: 5px;
  border: 1px solid rgb(163, 163, 163);
  margin: px-to-rem(4px) 0;
  cursor: pointer;
}
.copy-status {
  font-size: px-to-rem(12px);
  margin-left: px-to-rem(30px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 700px) {
  .ac-color {
    width: 100%;
  }
}
</style>
