<template>
  <footer class="app-footer">
    <div class="container footer-content">
      <div class="footer-section">
        <h4>Pari'Clic</h4>
        <p>Photographe professionnelle</p>
      </div>

      <div class="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <p>Email : contact@pariclic.fr</p>
        <p>Tél : 06 00 00 00 00</p>
      </div>

      <div class="footer-section">
        <h4>Légal</h4>
        <ul>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">CGU</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Pari'Clic — Tous droits réservés
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;
.app-footer {
  background: var(--bg-secondary);
  padding: $space-xl 0 $space-md;
  margin-top: $space-xl;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $space-xl;
}

.footer-section h4 {
  margin-bottom: $space-sm;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: $space-xs;
}

.footer-bottom {
  text-align: center;
  margin-top: $space-lg;
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>
