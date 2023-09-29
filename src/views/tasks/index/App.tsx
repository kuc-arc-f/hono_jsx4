import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';

//
export const TaskIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <h1>Tasks: CSR</h1>
        <a href="/test/test_create">[ Create ]</a>
        <hr />
        <div id="root"></div>
        {html`
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        `}        
        {html`<script type="text/babel" src="/js/tasks/index.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
{html`<script type="text/babel">
function App() {
return (
  <div className="App">
    <h1>Hello React Router v6</h1>
  </div>
);
}  
ReactDOM.createRoot(document.getElementById('root')).render(
<App />
)              
</script>
`}  
*/