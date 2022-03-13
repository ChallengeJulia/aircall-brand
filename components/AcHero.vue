<template>
  <component :is="tag" class="ac-hero">
    <div class="ac-hero__image">
      <slot name="image"></slot>
    </div>
    <div class="ac-hero__text">
      <slot />
    </div>
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
  },
};
</script>

<style lang="scss" scoped>
.ac-hero {
  background: var(--ac-grey-base);
  background: linear-gradient(180deg, var(--ac-grey-base) 0%, white 50%);

  display: flex;
  align-items: center;
}
.ac-hero__image {
  padding: px-to-rem(20px);
  width: 40%;
  img {
    width: 100%;
  }
}
.ac-hero__text {
  width: 60%;
  font-size: px-to-rem(40px);
  line-height: px-to-rem(54px);
  font-weight: 600;
  color: var(--ac-text-secondary);
  padding: px-to-rem(50px);
  margin-top: px-to-rem(100px);
  margin-bottom: px-to-rem(50px);
}

@media screen and (max-width: 1500px) {
  .ac-hero {
    flex-direction: column;
    align-items: center;
  }
  .ac-hero__image,
  .ac-hero__text {
    width: 100%;
  }
  .ac-hero__text {
    font-size: px-to-rem(24px);
    line-height: px-to-rem(30px);
    padding: px-to-rem(20px);
    margin-top: 0;
  }
  .ac-hero__image img {
    max-height: 300px;
  }
}
</style>
