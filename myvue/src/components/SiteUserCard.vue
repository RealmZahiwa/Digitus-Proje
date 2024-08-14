<template>
  <div class="user-card">
    <img :src="user.avatar" alt="user avatar" class="avatar" />
    <h3>{{ user.name }}</h3>
    <span>{{ user.location }}</span>
    <button class="follow-btn">Follow</button>
  </div>
</template>

<script>
export default {
  name: 'SiteUserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  width: 150px;
  margin: 0 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
h3 {
  margin: 0;
  font-size: 16px;
}
span {
  display: block;
  font-size: 12px;
  color: gray;
  margin-bottom: 0.5rem;
}
.follow-btn {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  width: 100%; /* buton */
  box-sizing: border-box; /* her deisimde kontrol et qa */
}
.follow-btn:hover {
  background-color: #0056b3;
}
</style>
