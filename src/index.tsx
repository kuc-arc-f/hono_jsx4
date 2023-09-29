import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import { serveStatic } from 'hono/cloudflare-workers'
//
import type { Database } from '@cloudflare/d1'
import {Layout} from './views/layout';
import testRouter from './routes/test';
//import {Test11} from './views/test11/App';
import {TestCreate} from './views/test_create/App';
import {TestIndex} from './views/test_index/App';
import {TestShow} from './views/test_show/App';
//import {TaskIndex} from './views/tasks/index/App';
import {Csr1} from './views/csr1/App';
import {Csr2} from './views/csr2/App';
//
interface Env {
  DB: Database
}
//
export const app = new Hono()
app.get('/static/*', serveStatic({ root: './' }))
app.get('/js/*', serveStatic({ root: './' }))
//
const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}
/**
* route
*/
app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
});
app.get('/test/test1', async (c) => { return await testRouter.test1(c.env.DB); });
app.get('/test/test_create', async (c) => { 
  return c.html(<TestCreate />);
});
app.get('/test/test_index', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<TestIndex items={items} />);
});
app.get('/test/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TestShow item={item} />);
});
/* CSR */
app.get('/csr1', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<Csr1 items={items} />);
});
app.get('/csr2', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<Csr2 items={items} />);
});


/**
* API
*/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/test/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/csr2/get_list', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});

export default app;
/*
*/
