import { createApp } from 'vue'
import App from './App.vue'

// Font Awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRightToBracket, faBook)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
