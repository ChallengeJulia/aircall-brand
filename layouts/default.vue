<template>
  <div class="default-layout">
    <ac-header />
    <main class="layout__content">
      <nuxt />
    </main>
    <ac-footer />
  </div>
</template>

<script>
import AcHeader from "@/components/layout/AcHeader.vue";
import AcFooter from "@/components/layout/AcFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    AcHeader,
    AcFooter,
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.layout__content {
  flex-grow: 1;
}
</style>
