<template>
  <footer class="footer">
    <div class="wrapper contacts">
      <router-link to="/favorites" class="contacts__favorites">Избранное</router-link>
      <span class="contacts__phone">8 800 888 00 88</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
.footer {
  width: 100%;
  background-color: #0A1E32;
}

.contacts {
  display: flex;
  justify-content: space-between;
}

.contacts__favorites {
  padding: 32px 0 40px 0;
  font-weight: 500;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
}

.contacts__favorites:hover {
  text-decoration: underline;
}

.contacts__phone {
  padding: 32px 0;
  font-weight: 500;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
}
</style>