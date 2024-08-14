<template>
  <div class="home-page">
    <SiteHeader />
    <div class="content">
      <div class="main-content">
        <div class="spacer"></div> 
        <div class="post-input">
          <img src="https://via.placeholder.com/40" alt="Profile Image" class="input-profile-img" />
          <input type="text" placeholder="Write something, Merve" />
          <button class="emoji-btn">😀</button>
          <button class="add-btn">+</button>
        </div>
        <SitePostCard v-for="post in posts" :key="post.id" :post="post" />
        <div class="user-section">
          <div class="user-section-header">
            <h3>Members You May Know</h3>
            <button class="see-all-btn">SEE ALL</button>
          </div>
          <div class="user-cards-container">
            <button @click="prev" class="arrow-btn">‹</button>
            <div class="user-cards">
              <SiteUserCard v-for="user in visibleUsers" :key="user.id" :user="user" />
            </div>
            <button @click="next" class="arrow-btn">›</button>
          </div>
        </div>
      </div>
      <SiteSidebar :items="sidebarItems" />
    </div>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader.vue';
import SitePostCard from './SitePostCard.vue';
import SiteSidebar from './SiteSidebar.vue';
import SiteUserCard from './SiteUserCard.vue';

import mockData from '../mockData.json';

export default {
  components: {
    SiteHeader,
    SitePostCard,
    SiteSidebar,
    SiteUserCard,
  },
  data() {
    return {
      posts: mockData.posts,
      sidebarItems: mockData.sidebarItems,
      users: mockData.users,
      startIndex: 0,
      visibleCount: 3
    };
  },
  computed: {
    visibleUsers() {
      return this.users.slice(this.startIndex, this.startIndex + this.visibleCount);
    }
  },
  methods: {
    next() {
      if (this.startIndex + this.visibleCount < this.users.length) {
        this.startIndex += 1;
      }
    },
    prev() {
      if (this.startIndex > 0) {
        this.startIndex -= 1;
      }
    }
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  padding-top: 60px; /* header a yer aç */
}
.content {
  display: flex;
  width: 80%;
  justify-content: space-between;
}
.main-content {
  flex: 3;
}
aside {
  flex: 1;
  margin-left: 1rem;
}
.spacer {
  height: 30px; /* header durum arası burası!!!!! */
}
.post-input {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
.input-profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.post-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.emoji-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
}
.add-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
}
.user-section {
  margin-top: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.user-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.see-all-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
}
.user-cards-container {
  display: flex;
  align-items: center;
}
.user-cards {
  display: flex;
  overflow: hidden;
}
.arrow-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>
