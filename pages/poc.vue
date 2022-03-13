<template>
  <div>
    <ac-hero tag="section">
      <template #image>
        <img
          src="@/assets/images/vector/build_wireframe.svg"
          alt="Build wireframe"
        />
      </template>
      Good design requires diverse perspectives and skills coming together to
      make experiences simpler and more meaningful for everyone.</ac-hero
    >

    <ac-quote title="Summary" class="ac-container">
      <p>
        A look into our brand system, viewed and told by Aircall designers and
        product teams
      </p>
    </ac-quote>

    <section class="articles-preview ac-container">
      <h2 class="ac-h3">Our stories</h2>
      <ac-article
        v-for="article in articles"
        :key="article._id"
        :title="article.title"
        :content="article.content"
        :tags="article.tags"
        :meta-data="article.creation"
      />
    </section>

    <ac-quote title="Beyond today" class="ac-container">
      <p>
        We’re proud of what we've built and are excited about what comes next as
        we move beyond what’s possible today. Welcome to Aircall.
      </p>
    </ac-quote>

    <section class="palette-generator">
      <div class="ac-container">
        <div class="ac-h2">Palette finder</div>
        <p>Find which palette you should use according to your need.</p>
        <p>
          I need to
          <select v-model="paletteObjective">
            <option value="article">write an article</option>
            <option value="tables">draw tables</option>
            <option value="slides">create slides</option></select
          >.
        </p>
        <div class="generator__result">
          <div v-if="paletteObjective === 'article'">
            <ac-color color="#00B388">#00B388: links, buttons</ac-color>
            <ac-color color="#101820">#101820: title</ac-color>
            <ac-color color="#595952">#595952: paragraph</ac-color>
          </div>
          <div v-else-if="paletteObjective === 'tables'">
            <ac-color color="#F1F3F8" />
            <ac-color color="#101820" />
            <ac-color color="#595952" />
          </div>
          <div v-else-if="paletteObjective === 'slides'">
            <ac-color color="#00B388">#00B388: links, buttons</ac-color>
            <ac-color color="#345BC2" />
            <ac-color color="#FF7B7B" />
            <ac-color color="#FFC000" />
            <ac-color color="#752467" />
            <ac-color color="#FF5D3E" />
          </div>
        </div>

        <div class="generator__action">
          <p>Find all our assets, logo, colors and whitepapers.</p>
          <ac-button>Visit our assets page</ac-button>
        </div>
      </div>
    </section>

    <section class="press">
      <div class="ac-container">
        <h2 class="ac-h2">Press</h2>
        <div class="press__testimonial">
          <h3 class="ac-h3">Techcrunch</h3>
          <blockquote class="testimonial__quote">
            "Many companies have been looking for a new phone system with
            various lockdowns taking place around the world. And Aircall has
            capitalized on this influx of customers."
          </blockquote>
          <a href="#" class="testimonial__link">Read more</a>
        </div>
        <div class="press__testimonial">
          <h3 class="ac-h3">Bloomberg</h3>
          <blockquote class="testimonial__quote">
            "Expand into video calls and voice intelligence for an undoubtable
            success"
          </blockquote>
          <a href="#" class="testimonial__link">Read more</a>
        </div>
        <div class="press__testimonial">
          <h3 class="ac-h3">Techradar</h3>
          <blockquote class="testimonial__quote">
            "The best business phone systems, both for the modern office as well
            as for remote workers."
          </blockquote>
          <a href="#" class="testimonial__link">Read more</a>
        </div>
        <div class="press__action">
          <ac-button outline>All articles</ac-button>
        </div>
      </div>
    </section>

    <ac-hero tag="section">
      <template #image>
        <img src="@/assets/images/vector/building_website.svg" alt="" />
      </template>
      <div class="more-section">
        Want to know more about us?
        <div class="more__action">
          <ac-button>Aircall website</ac-button>
          <ac-button outline>Join us</ac-button>
        </div>
      </div>
    </ac-hero>
  </div>
</template>

<script>
import MockArticles from "@/helpers/articles.js";

export default {
  name: "PocPage",
  data() {
    return {
      articles: MockArticles,
      paletteObjective: "article",
    };
  },
};
</script>

<style lang="scss" scoped>
.articles-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: px-to-rem(20px);
  h2 {
    grid-column: span 3;
  }
}
.press {
  background: var(--ac-primary-dark);
  padding: 100px 0;
  color: white;
  .press__testimonial {
    margin: px-to-rem(25px) auto;
    max-width: 900px;

    &:nth-child(2n) {
      text-align: right;
    }

    .testimonial__link {
      color: var(--ac-white);
      font-size: px-to-rem(14px);
    }

    .testimonial__quote {
      margin: 0;
      padding: px-to-rem(10px) 0;
    }
  }

  .press__action {
    margin-top: px-to-rem(30px);
    text-align: center;
  }
}

.palette-generator {
  background: var(--ac-grey-base);
  padding: 100px 0;
  background: var(--ac-grey-base);
  background: linear-gradient(180deg, white 0%, var(--ac-grey-base) 50%);

  .generator__result {
    padding-left: 50px;
  }
  .generator__action {
    text-align: center;
    margin-top: px-to-rem(60px);
  }
}
.more-section {
  text-align: center;

  .more__action {
    margin-top: px-to-rem(20px);

    .ac-button {
      margin: 0 px-to-rem(10px);
    }
  }
}
@media screen and (max-width: 1100px) {
  .articles-preview {
    .ac-article {
      grid-column: span 3;
    }
  }

  .palette-generator .generator__result {
    padding-left: 0;
  }
}
</style>
