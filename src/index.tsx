import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import { serveStatic } from 'hono/cloudflare-workers'
//
import type { Database } from '@cloudflare/d1'
import {Layout} from './views/layout';
import testRouter from './routes/test';
import taskRouter from './routes/tasks';
import {TestCreate} from './views/test_create/App';
import {TestIndex} from './views/test_index/App';
import {TestShow} from './views/test_show/App';
import {TaskIndex} from './views/tasks/App';
import {TaskShow} from './views/tasks/show/App';
import {TaskCreate} from './views/tasks/create/App';
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
    <Layout title="Welcome Top">
      <h1 class="text-4xl font-bold">Hello Hono!</h1>
      <hr />
      <ul>
        {props.messages.map((message) => {
          return (<li class="my-2" >{message}!!</li>)
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
/* tasks */
app.get('/tasks', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<TaskIndex items={items} />);
});
app.get('/tasks/create', async (c) => { 
  return c.html(<TaskCreate />);
});
app.get('/tasks/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(<TaskShow item={item} id={Number(id)} />);
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
/* tasks */
app.post('/api/tasks/get_list', async (c) => { 
  const resulte = await taskRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
//
app.post('/api/csr2/get_list', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});

export default app;
/*
*/
