<template>
  <footer class="ac-footer">
    <div class="ac-container ac-container--flex">
      <div class="footer__copyright">© Aircall</div>
      <div class="footer__menu-wrapper">
        <nav class="footer__menu">
          <nuxt-link class="menu__link" :to="localePath('index')"
            >Home</nuxt-link
          >
          <nuxt-link
            v-for="menuItem in mainMenu"
            :key="menuItem"
            class="menu__link"
            :to="localePath({ name: 'poc' })"
            >{{ menuItem }}</nuxt-link
          >
        </nav>
        <nav class="footer__menu">
          <nuxt-link class="menu__link" :to="localePath({ name: 'poc' })"
            >Terms</nuxt-link
          >
          <nuxt-link class="menu__link" :to="localePath({ name: 'poc' })"
            >Privacy</nuxt-link
          >
          <nuxt-link class="menu__link" :to="localePath({ name: 'poc' })"
            >Sitemap</nuxt-link
          >
        </nav>
      </div>
    </div>
    <nav class="footer__social-menu">
      <a
        href="https://www.facebook.com/aircallapp"
        target="_blank"
        title="Facebook"
        class="menu__link"
      >
        <img src="@/assets/images/brands/facebook.svg" alt="Facebook" />
      </a>
      <a
        href="https://twitter.com/aircall"
        target="_blank"
        title="Twitter"
        class="menu__link"
      >
        <img src="@/assets/images/brands/twitter.svg" alt="Facebook" />
      </a>
      <a
        href="https://www.linkedin.com/company/aircall/"
        target="_blank"
        title="LinkedIn"
        class="menu__link"
      >
        <img src="@/assets/images/brands/linkedin.svg" alt="Facebook" />
      </a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "AcFooter",
  data() {
    return {
      mainMenu: [
        "Assets",
        "Stories",
        "Press",
        "Company Info",
        "Careers",
        "Contact",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ac-footer {
  background: var(--ac-grey-base);
  padding: px-to-rem(20px) 0;
}
.footer__menu-wrapper {
  display: flex;
  justify-content: space-between;
  width: 40%;
}
.footer__menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .menu__link {
    text-decoration: none;
    color: var(--ac-text-secondary);
    font-size: px-to-rem(14px);
    margin-top: px-to-rem(5px);
  }
}
.footer__social-menu {
  width: 100%;
  text-align: right;
  padding: 0 px-to-rem(20px);
  .menu__link {
    margin: 0 px-to-rem(5px);
  }
}

@media screen and (max-width: 900px) {
  .footer__menu-wrapper {
    width: 100%;
    margin-top: px-to-rem(10px);
    justify-content: space-around;
  }
}
</style>
