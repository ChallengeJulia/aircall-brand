<template>
  <component
    :is="type"
    :class="['ac-button', { 'ac-button--outline': outline }]"
    :to="to"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "AcButton",
  props: {
    to: { type: [Object, String], default: "" },
    outline: { type: Boolean, default: false },
  },
  computed: {
    type() {
      if (this.to) {
        return "nuxt-link";
      }

      return "button";
    },
  },
};
</script>

<style lang="scss" scoped>
.ac-button {
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: $font-family-sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: var(--ac-white);
  background: var(--ac-primary-base);
  border: 1px solid var(--ac-primary-base);

  padding: px-to-rem(10px) px-to-rem(15px);
  border-radius: 5px;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: var(--ac-primary-dark);
  }
}
.ac-button--outline {
  color: var(--ac-primary-base);
  background: var(--ac-white);
  border: 1px solid var(--ac-primary-base);
  &:hover {
    color: var(--ac-primary-dark);
    background: var(--ac-primary-light);
  }
}
</style>
