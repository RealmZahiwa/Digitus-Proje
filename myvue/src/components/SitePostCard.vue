<template>
  <div class="post-card">
    <div class="post-header">
      <div class="post-info-container">
        <img :src="post.avatar" alt="avatar" class="avatar" />
        <div class="post-info">
          <h2>{{ post.author }}</h2>
          <span>{{ post.role }}</span>
        </div>
      </div>
      <button class="dropdown-btn">···</button>
    </div>
    <img :src="post.image" alt="post image" class="post-image" />
    <div class="post-stats">
      <div class="stats-left">
        <button class="action-btn">
          <img src="@/assets/like-icon.png" alt="Like" class="action-icon" /> 3
        </button>
        <button class="action-btn">
          <img src="@/assets/share-icon.png" alt="Share" class="action-icon" />
        </button>
      </div>
      <div class="stats-right">
        <button class="action-btn save-btn">
          <img src="@/assets/save-icon.png" alt="Save" class="action-icon" />
        </button>
      </div>
      <div class="stats-bottom">
        <span>{{ post.time }}</span> · 
        <span>{{ post.views }} Views</span> · 
        <span>{{ post.comments }} Comments</span>
      </div>
    </div>
    <p>{{ post.content }}</p>
    <div class="post-tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
    <hr />
    <div class="comment-section">
      <input type="text" placeholder="Comment This" />
      <button class="post-btn">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SitePostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-info-container {
  display: flex;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem; /* Profil foto isim arası */
}
.post-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.post-info h2 {
  margin: 0;
  font-size: 16px;
  text-align: left; 
}
.post-info span {
  font-size: 12px;
  color: gray;
  text-align: left; 
}
.dropdown-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.post-image {
  width: 100%;
  height: auto;
  margin: 1rem 0;
}
.post-stats {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
}
.stats-left,
.stats-right {
  display: flex;
  align-items: center;
}
.stats-left {
  justify-content: flex-start;
}
.stats-right {
  justify-content: flex-end;
  margin-left: auto;
  align-items: center; /* ???kaydet */
}
.stats-bottom {
  display: flex;
  justify-content: flex-start;
  color: gray;
  font-size: 12px;
}
p {
  margin: 1rem 0;
}
.post-tags {
  margin: 0.5rem 0;
}
.tag {
  display: inline-block;
  background-color: #f0f2f5;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  font-size: 12px;
}
.comment-section {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 0.5rem;
}
.comment-section input {
  flex: 1;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}
.comment-section .post-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.action-btn {
  background: none;
  border: none;
  color: gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 18px; 
}
.action-icon {
  width: 24px; 
  height: 24px;
  margin-right: 0.25rem;
}
.save-btn {
  margin-left: auto;
}
.share-btn {
  margin-left: 1rem;
}
</style>
