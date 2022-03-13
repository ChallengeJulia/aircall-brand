<template>
  <article class="ac-article">
    <header>
      <h3 class="article__title">{{ title }}</h3>
    </header>
    {{ content }}
    <footer class="article__footer">
      <ul class="article__tags">
        <li v-for="tag in tags" :key="tag" class="tags__item">{{ tag }}</li>
      </ul>
      By {{ metaData.created_by }},
      <time :datetime="metaData.created_at">{{
        metaData.created_at | date
      }}</time>
    </footer>
  </article>
</template>

<script>
export default {
  name: "AcArticle",
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: Array, required: true },
    metaData: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.ac-article {
  border-radius: 5px;
  padding: px-to-rem(20px);
  box-shadow: 0px 0px 15px rgba(114, 130, 207, 0.3);
  transition: box-shadow 0.3s ease-in;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: px-to-rem(10px);

  .article__title {
    font-size: px-to-rem(26px);
    line-height: px-to-rem(30px);
    font-weight: 500;
  }

  .article__tags {
    list-style-type: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: px-to-rem(10px);
  }
  .tags__item {
    background: var(--ac-primary-light);
    display: inline;
    padding: 2px 5px;
    font-size: px-to-rem(12px);
    border-radius: 2px;
    margin: 0 2px;
  }

  .article__footer {
    color: var(--ac-text-secondary);
    text-align: right;
    font-size: px-to-rem(14px);
    margin-top: px-to-rem(15px);
  }

  &:hover {
    box-shadow: 0px 0px 15px rgba(114, 130, 207, 0.5);
  }
}
</style>
