<template>
    <div class="circle-container" :style="{ '--size': size, '--border-color': borderColor }">
      <div class="circle-image" :style="{ backgroundImage: `url(${imageUrl})`, 'background-position': customPosition, 'background-size': customSize}"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      default: '#ffffff'
    },
    baseSize: {
      type: Number,
      default: 300
    },
    customPosition: {
        type: String,
        default: 'center'
    },

    customSize: {
        type: String,
        default: '150%'
    }
  });
  
  const size = computed(() => `${props.baseSize}px`);
  </script>
  
  <style scoped>

  .circle-container {
    position: relative;
    max-width: 90vw;
    width: var(--size);
    height: var(--size);
    max-height: 90vw;
    background: #242424;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .circle-container::before {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      background-image: conic-gradient(transparent,transparent,transparent, var(--border-color));
      border-radius: 50%;
      animation: spin 5s linear infinite;
  }

  @keyframes spin {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(360deg);
      }
  }

  .circle-image {
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    z-index: 2;
  }

  
  @media (max-width: 968px) {
    .circle-container {
        width: 250px;
        height: 250px;
    }
  }
  

  </style>