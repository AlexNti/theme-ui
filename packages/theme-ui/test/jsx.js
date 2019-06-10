import { transformSync } from '@babel/core'
import jsx from '../src/jsx'

const fixture = `/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    css={{
      m: 0,
      bg: 'primary',
    }}
  />
`

test('converts css prop to @styled-system/css call', () => {
  const { code } = transformSync(fixture, {
    presets: [
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  })
  expect(code).toMatchSnapshot()
})

const alt =
`/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    cx={{
      m: 0,
      bg: 'primary'
    }}
  />
`

test.only('works with emotion preset', () => {
  const { code } = transformSync(alt, {
    presets: [
      [ '@emotion/babel-preset-css-prop', {
        // not forwarded to babel-plugin-emotion
        // cssPropOptimization: false
      } ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ],
  })
  console.log({ code })
  expect(code).toMatch(/bg: \'primary\'/)
  expect(code).toMatch(/m: 0,/)
  // console.log(code)
  // expect(code).toMatchSnapshot()
})
