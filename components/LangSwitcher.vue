<template>
  <div class="lang-switcher">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :title="$t(`locales.${locale.name}`)"
      :class="[
        'lang__item',
        { 'lang__item--active': locale.code === $i18n.locale },
      ]"
    >
      <span v-if="compact">{{ locale.code | uppercase }}</span>
      <span v-else>{{ $t(`locales.${locale.name}`) }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "AcLangSwitcher",
  props: {
    compact: { type: Boolean, default: false },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-switcher {
  text-align: right;
}
.lang__item {
  text-decoration: none;
  font-size: px-to-rem(14px);

  &:not(:last-child) {
    margin-right: px-to-rem(10px);
  }
}
.lang__item--active {
  text-decoration: underline;
}
</style>
