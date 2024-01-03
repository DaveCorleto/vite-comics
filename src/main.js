

import { createApp } from 'vue';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import HelloWorld from './components/HelloWorld.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppCentralBar from './components/AppCentralBar.vue';
import AppOtherInfo from './components/AppOtherInfo.vue';
import App from './App.vue';
import AppFather from './components/AppFather.vue';
import AppCard from './components/AppCard.vue';
import AppVocimenu from './components/AppVocimenu.vue';


const app = createApp(App);

app.component('AppHeader', AppHeader);
app.component('AppMain', AppMain);
app.component('HelloWorld', HelloWorld);
app.component('AppJumbotron', AppJumbotron);
app.component('AppCentralBar', AppCentralBar);
app.component('AppOtherInfo', AppOtherInfo);
app.component('AppFather', AppFather);
app.component('AppCard', AppCard);
app.component('AppVocimenu', AppVocimenu);
app.mount('#app');
