<template>
    <button type="submit" class="btn" :style="customStyle">
          {{text}}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            },
            customStyle: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style scoped>
.btn {
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  border: 1px solid var(--white);
  position: relative;
  z-index: 3;
  overflow: hidden;
  transition: 0.5s;
}

.btn::before,
.btn::after {
  content: "";
  width: 100%;
  height: 50%;
  background-color: var(--gray);
  position: absolute;
  z-index: -1;
  overflow: hidden;
  transition: transform 0.5s;
}


.btn::before {
  top: 0;
  left: 0;
  transform-origin: left;
  transform: scaleX(0);
}
.btn::after {
  bottom: 0;
  right: 0;
  transform-origin: right;
  transform: scaleX(0);
}

.btn:hover::before {
  transform-origin: right;
  transform: scaleX(1);
}
 .btn:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}
</style>