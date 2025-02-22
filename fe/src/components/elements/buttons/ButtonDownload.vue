<template>
    <a id="download" href='/cv/CV-Andryan.jpeg' download="CV-Andryan.jpeg" style='text-decoration: none'>
    <div class="btn-4" data-tooltip="Size: 100Kb">
            <div class="button-wrapper">
              <div class="text">{{text}}</div>
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
    </a>
</template>

<script setup>

defineProps({
    text: {
        type: String,
        default: "Download"
    }
})

</script>

<style scoped>
a{
    width: fit-content;
    scale: .6;
    border-radius: 32px;
}

.btn-4 {
  
  --width: 160px;
  --height: 64px;
  --tooltip-height: 40px;
  --tooltip-width: 110px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: var(--bg-btnDownload);
  --tooltip-color: var(--color-font);
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  text-align: center;
  border-radius: 32px;
  font-family: inherit;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-4::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: var(--tooltip-color);
  font-size: 16px;
  color: var(--bg-color);
  border-radius: 6px;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.btn-4::after,
.btn-4::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.btn-4 .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-4 .button-wrapper,
.btn-4 .text,
.btn-4 .icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.btn-4 .text {
  top: 0;
}

.btn-4 .text,
.btn-4 .icon {
  transition: top 0.5s;
}

.btn-4 .icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-4 .icon svg {
  width: 24px;
  height: 24px;
}

.btn-4:hover {
  background: var(--bg-btnDownload-hover);
}

.btn-4:hover .text {
  top: -100%;
}

.btn-4:hover .icon {
  top: 0;
}

.btn-4:hover:before,
.btn-4:hover:after {
  opacity: 1;
  visibility: visible;
}

.btn-4:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.btn-4:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}

</style>