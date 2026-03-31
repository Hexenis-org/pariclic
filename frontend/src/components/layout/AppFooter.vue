<template>
  <footer class="app-footer">
    <div class="container footer-content">
      <!-- Brand -->
      <div class="footer-section brand">
        <h4>{{ data.brand.name }}</h4>
        <p>{{ data.brand.description }}</p>

        <div class="socials">
          <a
            v-for="social in data.socials"
            :key="social.name"
            :href="social.url"
            class="social-link"
          >
            <AppIcon :name="social.icon" :size="18" variant="outline" />
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="footer-section">
        <h4>{{ data.navigation.title }}</h4>
        <ul>
          <li v-for="link in data.navigation.links" :key="link.label">
            <a :href="link.url">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h4>Contact</h4>
        <a :href="'mailto:' + data.contact.email">{{ data.contact.email }}</a>
      </div>

      <!-- Legal -->
      <div class="footer-section">
        <h4>{{ data.legal.title }}</h4>
        <ul>
          <li v-for="link in data.legal.links" :key="link.label">
            <a :href="link.url">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} {{ data.brand.name }} — Tous droits réservés
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerData as data } from './data.ts'
import AppIcon from '../common/icons/AppIcon.vue'
</script>

<style scoped lang="scss">
@use '@/assets/scss/layout.scss' as *;

.app-footer {
  background: var(--bg-elevated);
  padding: $space-xl 0 $space-md;
  margin-top: $space-xl;

  border-top: 1px solid var(--border-subtle);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $space-xl;
}

/* Brand */
.brand p {
  color: var(--text-secondary);
  margin-bottom: $space-md;
}

/* Réseaux */
.socials {
  display: flex;
  gap: $space-md;
}

.socials a {
  font-size: 0.9rem;
  color: var(--text-muted);

  transition: all $transition-fast;

  &:hover {
    color: var(--color-primary);
  }
}

/* Sections */
.footer-section h4 {
  margin-bottom: $space-sm;
  color: var(--text-primary);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: $space-xs;
}

.footer-section a {
  color: var(--text-secondary);
  transition: color $transition-fast;

  &:hover {
    color: var(--color-primary);
  }
}

/* Bottom */
.footer-bottom {
  text-align: center;
  margin-top: $space-lg;
  font-size: 0.85rem;
  color: var(--text-muted);
}
</style>
