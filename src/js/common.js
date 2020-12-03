// JS

// import Vue directives

// Vue.js
import Vue from 'vue';
//import store from './vue/vue-store';
//import router from './vue/vue-router';

//import Vue plugins

// styles
import '../styles/main.scss';


// Vue components (for use in html)


// Vue directives


//Plugins init

// Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

// Vue init

window.app = app;

import MobileMenu from "../modules/mobile-menu/mobile-menu";

if (document.querySelector('.mobile-menu')){
    new MobileMenu({
        $el: document.querySelector('.mobile-menu'),
        $toggles: document.querySelectorAll('.mobile-toggles')
    });
}
