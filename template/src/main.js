import dom from 'jsx-render'
import './style.<%= preprocessor %>'

const app = document.querySelector('.app')

app.appendChild(<p><%= appName %>App Start Here!</p>)
