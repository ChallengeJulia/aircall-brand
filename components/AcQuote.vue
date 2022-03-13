<template>
  <component :is="tag" class="ac-quote">
    <h2 class="ac-h2">{{ title }}</h2>
    <slot />
  </component>
</template>

<script>
export default {
  name: "AcHero",
  props: {
    tag: {
      type: String,
      default: "div",
      validator: (val) => ["div", "section"].includes(val),
    },
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.ac-quote {
  text-align: center;
  font-size: px-to-rem(20px);
  padding: 75px 10px;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 33%;
    background: var(--ac-primary-base);
    margin: 50px;
  }

  &::after {
    float: right;
  }
}
</style>
