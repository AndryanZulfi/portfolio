<template>
    <button
            
            class="button"
          >
            <svg class="burger-6 ham hamRotate ham1" :class="{'is-closed' : isActive}" viewBox="0 0 100 100">
              <path
                class="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
              />
              <path class="line middle" d="m 30,50 h 40" />
              <path
                class="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
              />
            </svg>
          </button>
</template>

<script>
    export default {
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>


<style scoped>

.button {
  background:  var(--bg-btnNav);
  border: 0;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0;
  opacity: 0.6;
  scale: 0.7;
  border-radius: 8px;
  transition: 0.25s;
}


.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: scaleY(0.8) scaleX(1.2);
}

.burger-6.is-closed.hamRotate {
  transform: rotate(45deg) scale(1.2);
}

.line {
  fill: none;
  transition: 0.4s;
  stroke: var(--border);
  stroke-width: 3;
  stroke-linecap: round;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.burger-6.is-closed.ham1 .top {
  stroke-dashoffset: -98px;
}
.burger-6.is-closed.ham1 .bottom {
  stroke-dashoffset: -138px;
}
</style>