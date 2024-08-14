<template>
  <aside class="sidebar">
    <div v-for="item in items" :key="item.id" class="sidebar-item">
      <img :src="item.image" alt="sidebar image" class="sidebar-image" />
      <h3>{{ item.title }}</h3>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SiteSidebar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
}
.sidebar-item {
  margin-bottom: 1rem;
}
.sidebar-image {
  width: 100%;
  height: auto;
}
</style>
