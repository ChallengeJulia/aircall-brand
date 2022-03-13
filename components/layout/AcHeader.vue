<template>
  <header class="ac-header">
    <div class="ac-container ac-container--flex">
      <nuxt-link class="link-home" :to="localePath('index')">
        <img
          class="header__logo"
          src="@/assets/images/aircall_logo_default_rgb.svg"
          alt="Aircall logo"
        />
        <h1>brand</h1>
      </nuxt-link>

      <div>
        <nav class="main-nav">
          <div class="main-nav__item">Stories</div>
          <div class="main-nav__item">Assets</div>
          <div class="main-nav__item">Press</div>
        </nav>
        <lang-switcher compact />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AcHeader",
};
</script>

<style lang="scss" scoped>
.ac-header {
  border-bottom: 1px solid var(--ac-grey-base);
  position: sticky;
  width: 100%;
  background: var(--ac-white);
  top: 0;
}
.link-home {
  display: flex;
  align-items: center;
  font-size: 10px;
  text-decoration: none;
}
.header__logo {
  height: 60px;
}
.main-nav {
  display: flex;
  column-gap: px-to-rem(25px);

  .main-nav__item {
    cursor: pointer;
    font-weight: 500;
  }
}
.lang-switcher {
  margin-top: px-to-rem(10px);
}
@media screen and (max-width: 900px) {
  .link-home {
    font-size: 8px;
  }
  .header__logo {
    height: 40px;
  }
  .main-nav {
    padding-top: 10px;
    padding-left: 10px;
  }
}
</style>
