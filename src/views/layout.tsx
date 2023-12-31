import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
let title = "Welcome";
//
export const Layout: FC = (props) => {
//console.log(props);
  if(props.title){title = props.title;}
  return (
    <html>
      <head>
        <title>{title}</title>
        {html`
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        `}        
        {/* CSS */}
        {html`
        <link href="/styles/main.css" rel="stylesheet">
        <link href="/styles/globals.css" rel="stylesheet">
        `}        
      </head>
      <div class="text-center py-2">
        <a href="/">[ home ]</a>
        <a href="/test/test_index"><span class="ps-2">[test]</span></a>
        <a href="/csr1"><span class="ps-2">[ Csr1 ]</span></a>
        {/* <a href="/csr2">[ Csr2 ]</a> */}
        <a href="/tasks"><span class="ps-2">[ Tasks ]</span></a>
      </div>
      <hr />
      <body>
        <div class="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
  )
}
