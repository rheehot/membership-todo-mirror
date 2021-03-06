import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEdit, faPlus, faSave, faTrashAlt, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faTrashAlt, faEdit, faSave, faPlus);
library.add(faFontAwesome);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
