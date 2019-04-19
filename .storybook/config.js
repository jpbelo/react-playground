import { configure, addDecorator } from '@storybook/react'
import {withThemesProvider} from 'storybook-addon-styled-component-theme'

import theme from '../src/theme'

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

const themes = [theme]
addDecorator(withThemesProvider(themes))
