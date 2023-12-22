

import { createApp } from 'vue';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import HelloWorld from './components/HelloWorld.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppCentralBar from './components/AppCentralBar.vue';
import App from './App.vue';

const app = createApp(App);

app.component('AppHeader', AppHeader);
app.component('AppMain', AppMain);
app.component('HelloWorld', HelloWorld);
app.component('AppJumbotron', AppJumbotron);
app.component('AppCentralBar', AppCentralBar);

app.mount('#app');