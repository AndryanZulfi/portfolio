<template>
    <button type="submit" class="btn" :style="customStyle">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
</template>

<script>
    export default{
        props: {
            customStyle: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>


<style scoped>
.btn {
  scale: 1;
  font-family: inherit;
  font-size: 18px;
  background: var(--bg-btn) ;
  color: var(--color-font);
  padding: 15px 24px 15px 24px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

.btn span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

.btn svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

.btn:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

.btn:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

.btn:hover span {
  transform: translateX(8em);
}

.btn:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}

</style>