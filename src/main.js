import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});

function calcVH () {
	var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	document.querySelector('#app').setAttribute("style", "height:" + vH + "px;");
}
window.onload = calcVH();
window.addEventListener('onorientationchange', calcVH, true);
window.addEventListener('resize', calcVH, true);
