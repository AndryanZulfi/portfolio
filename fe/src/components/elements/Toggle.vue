<script setup>
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon } from 'lucide-vue-next'

const isDark = ref(false)

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  isDark.value = !isDark.value 
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(newTheme) 
  localStorage.setItem('theme', newTheme)
  console.log(document.documentElement.classList)
  console.log(newTheme)
}


onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  console.log(savedTheme)
  isDark.value = savedTheme === 'dark' 
  document.documentElement.classList.add(savedTheme) 
})
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    class="theme-toggle"
    :class="{ 'theme-toggle--dark': isDark }"
  >
    <div class="theme-toggle__icon-wrapper">
      <SunIcon v-if="!isDark" />
      <MoonIcon v-else />
    </div>
  </button>
</template>

  
  <style scoped>
  .theme-toggle {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    z-index: 1000;
  }
  
  .theme-toggle:hover {
    transform: scale(1.1);
  }
  
  .theme-toggle:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5), 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  }
  
  .theme-toggle__icon-wrapper {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fbbf24;
    transition: all 0.3s ease;
  }
  
  .theme-toggle--dark {
    background: linear-gradient(145deg, #2a2a2a, #323232);
    box-shadow: 5px 5px 10px #1e1e1e, -5px -5px 10px #3a3a3a;
  }
  
  .theme-toggle--dark .theme-toggle__icon-wrapper {
    color: #f9fafb;
  }
  
  .theme-toggle--dark:focus {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5), 5px 5px 10px #1e1e1e, -5px -5px 10px #3a3a3a;
  }
  
  @keyframes glow {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }
  
  .theme-toggle::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: inherit;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  .theme-toggle:hover::after {
    opacity: 0.5;
    animation: glow 2s infinite;
  }
  

  </style>