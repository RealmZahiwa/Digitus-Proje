<template>
  <header class="header">
    <div class="left-section">
      <div class="logo">
        <img src="https://via.placeholder.com/150x50?text=Digitus+Logo" alt="Digitus Logo">
      </div>
      <button class="add-btn">+</button>
    </div>
    <nav>
      <ul>
        <li>Moms</li>
        <li>Experts</li>
        <li>Explore</li>
        <li>Forum</li>
        <li>MomTalk</li>
      </ul>
    </nav>
    <div class="right-section">
      <img src="@/assets/search-icon.png" alt="Search" class="icon" />
      <div class="divider"></div>
      <img src="@/assets/notification-icon.png" alt="Notifications" class="icon" />
      <div class="divider"></div>
      <img src="@/assets/message-icon.png" alt="Messages" class="icon" />
      <div class="divider"></div>
      <div class="profile-section">
        <img src="https://via.placeholder.com/40" alt="Profile Image" class="profile-img" />
        <button class="dropdown-btn">▾</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.left-section {
  display: flex;
  align-items: center;
}
.logo img {
  height: 40px;
}
.add-btn {
  margin-left: 10px;
  font-size: 24px;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
}
nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav li {
  margin: 0 1rem;
  cursor: pointer;
}
.right-section {
  display: flex;
  align-items: center;
  margin-right: 20px; /* profil sağ üst  sola */
}
.icon {
  margin-left: 1rem;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.divider {
  height: 30px;
  width: 1px;
  background-color: #ccc;
  margin-left: 1rem;
}
.profile-section {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
}
.dropdown-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 0.5rem;
}
</style>
