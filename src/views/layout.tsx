import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
export const Layout: FC = (props) => {
  return (
    <html>
      <head>
      {html`
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      `}        
      </head>
      <div>
        <a href="/">[ home ]</a>
        <a href="/test/test_index">[test]</a>
        <a href="/csr1">[ Csr1 ]</a>
      </div>
      <hr />
      <body>{props.children}</body>
    </html>
  )
}
