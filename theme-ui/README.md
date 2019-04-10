
# theme-ui

**WIP** Themeable UI components for themes

```sh
npm i theme-ui
```

```jsx
// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

## `css` prop

The `css` utility is from [@styled-system/css](https://styled-system.com/css/).
This could potentially be handled with something like [Emotion plugins](https://github.com/emotion-js/emotion/pull/1299).

```jsx
import React from 'react'
import { css } from 'theme-ui'

export default () =>
  <div
    css={css({
      fontSize: 4,
      fontWeight: 'bold',
      color: 'primary', // picks up values from theme
    })}>
    Hello
  </div>
```

## MDX Components

Use the `components` prop to add components to MDX scope.
The `ThemeProvider` (name TBD) is a combination of `MDXProvider` and Emotion's `ThemeProvider`.

```jsx
// with mdx components
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import mdxComponents from './mdx-components'
import theme from './theme'

export default props =>
  <ThemeProvider
    components={mdxComponents}
    theme={theme}>
    {props.children}
  </ThemeProvider>
```

This will render child MDX documents with the components provided via context.
For use outside of MDX (e.g. Remark Markdown) the styles could be applied with a wrapper component.

## Styled components

These components can also be consumed *outside* of an MDX doc with the `Styled` component.

```jsx
import React from 'react'
import { Styled } from 'theme-ui'

export default props =>
  <Styled.wrapper>
    <Styled.h1>
      Hello
    </Styled.h1>
  </Styled.wrapper>
```

## `theme.styles`

The MDX components can also be styled via the `theme.styles` object.
This can be used as a mechanism to pass Typography.js-like styles to MDX content.

```js
// example theme
export default {
  colors: {
    primary: '#33e',
  },
  styles: {
    // this styles child MDX `<h1>` components
    h1: {
      fontSize: 32,
      // this value comes from the `color` object
      color: 'primary',
    },
  }
}
```

## Layout Components

Page layout components are included in the `theme-ui/layout` module.

```jsx
import React from 'react'
import {
  Layout,
  Header,
  Main,
  Container,
  Footer
} from 'theme-ui/layout'

export default props =>
  <Layout>
    <Header>
      Hello
    </Header>
    <Main>
      <Container>
        {props.children}
      </Container>
    </Main>
    <Footer>
      © 2019
    </Footer>
  </Layout>
```

## Experimental

- [Live Demo](https://theme-ui.now.sh/demo)
- [Typography.js Demo](https://theme-ui.now.sh/typography)

MIT License
