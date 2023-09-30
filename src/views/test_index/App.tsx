import type { FC } from 'hono/jsx'
import {Layout} from '../layout';
//
export const TestIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  return (
    <Layout title="Test_index">
      <div>
        <h1 class="text-4xl font-bold">Hello Hono!</h1>
        <a href="/test/test_create">[ Create ]</a>
        <hr />
        <ul>
          {props.items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3>{item.title}</h3></a>
              <p>id={item.id}</p>
              <hr />
            </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  )
}