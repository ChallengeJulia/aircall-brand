<template>
  <div>
    <ac-button class="cta-button" :to="localePath({ name: 'poc' })">{{
      $t("link-to-platform")
    }}</ac-button>
    <div class="container bg-white">
      <lang-switcher />
      <h1 class="ac-h2">Aircall brand platform</h1>
      <p>
        A brand platform to showcase the brand voice & assets, both for internal
        & external purposes.
      </p>

      <section class="text-section">
        <h2 class="ac-h3">Features</h2>
        <p>
          It is important to define the audience of this kind of platform. I
          think it is focused toward anyone who is in user experience and
          design.
        </p>
        <h3 id="structure" class="ac-list-title">Platform structure</h3>
        <ul>
          <li>
            Home: few words about Aircall, shortcut to assets, preview of main
            stories
          </li>
          <li>
            Stories: written by Aircall's employees, categories could be UX
            Research, product design, culture
          </li>
          <li>Press: articles about the company</li>
          <li>Brand resources: logo, press kit, colors, fonts</li>
        </ul>
        <h3 class="ac-list-title">Features</h3>
        <ul>
          <li>CTA: to Aircall main website and careers page</li>
          <li>A form to download the required logo/asset</li>
          <li>Blog and an admin interface</li>
          <li>Multi-language website</li>
        </ul>
      </section>

      <section class="text-section">
        <h2 class="ac-h3">Scope and timeline of the project</h2>
        <p>
          Because there mostly won't be end customers of Aircall on this
          platform, we should not spend too much time and effort in this
          project.
        </p>
        <p>
          We can aim for a delivery of this platform within a month and
          increment with new features if there is not enough time.
        </p>
        <p>
          A MVP would be all of the elements listed in the
          <a href="#structure">platform structure</a> except the Stories which
          required more effort from the content team.
        </p>
        <ol>
          <li>
            Week 1: UX / product design / Marketing: Content objectives,
            specification,
          </li>
          <li>Week 2: design + content</li>
          <li>Week 3: Development POC (front and back)</li>
          <li>Week 3: Content homepage</li>
          <li>Week 4: Test / Feedback + content</li>
          <li>Release</li>
        </ol>
      </section>

      <section class="text-section">
        <h2 class="ac-h3">Tech stack</h2>
        <p>Nuxt, VueJS, Wordpress</p>
        <p>
          Nuxt: because it creates an universal application, better to improve
          SEO.
        </p>
        <p>
          Wordpress: for the blog feature and other built-in feature like users
          roles (useful for setting up restricted pages)
        </p>
      </section>

      <section class="text-section">
        <h2 class="ac-h3">KPI</h2>
        <ul>
          <li>Number of visitors</li>
          <li>Time spend on the website (= read article, check assets)</li>
          <li>Number of assets downloaded (design whitepaper, logo...)</li>
          <li>Sources of the visitors: Google, from Aircall website, other</li>
        </ul>
      </section>

      <section class="text-section">
        <h2 class="ac-h3">Take a look</h2>
        <p>
          For this POC, I decided to only develop the homepage as it will give a
          good preview of what should contain the platform.
        </p>
        <p>
          I am neither a designer nor a content specialist, they will surely
          bring this POC to life.
        </p>
        <ac-button :to="localePath({ name: 'poc' })">{{
          $t("link-to-platform")
        }}</ac-button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  layout: "no-design",
  mounted() {
    console.log(
      "%c (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Nothing to see here ",
      "background: #000; color: #fff"
    );
  },
};
</script>

<style lang="scss" scoped>
.cta-button {
  position: sticky;
  float: right;
  top: 30px;
  right: 30px;
}
.container {
  max-width: 900px;
  width: 90%;
  padding: px-to-rem(30px);
  box-shadow: 0px 0px 15px rgba(114, 130, 207, 0.3);
  border-radius: 5px;
  margin: 50px auto;
}
.text-section {
  margin: px-to-rem(25px) 0;
}
@media screen and (max-width: 1400px) {
  .cta-button.ac-button {
    display: none;
  }
}
</style>
