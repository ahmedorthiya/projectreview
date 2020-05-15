import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {AppContainer} from 'react-hot-loader'
import * as serviceWorker from './serviceWorker'
import App from './app'

import '../styles/app.scss'
import 'react-context-modals/dist/main.css'


let token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': token.content,
    'X-Requested-With': 'XMLHttpRequest'
}

ReactDOM.render(
    <AppContainer warnings={false}>
        <App/>
    </AppContainer>, document.getElementById('app'));

serviceWorker.unregister()

/**
 * Webpack Hot Module Replacement API
 */
if (module.hot) {
    module.hot.accept()
}
