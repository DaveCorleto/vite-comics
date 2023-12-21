// import { createApp } from 'vue';

// import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
// import HelloWorld from './components/HelloWorld.vue';

// import App from './App.vue';

// createApp(App).mount('#app');


import { createApp } from 'vue';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import HelloWorld from './components/HelloWorld.vue';

import App from './App.vue';

const app = createApp(App);

app.component('AppHeader', AppHeader);
app.component('AppMain', AppMain);
app.component('HelloWorld', HelloWorld);

app.mount('#app');