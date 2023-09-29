import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
export const TestShow: FC<{ item: any }> = (props: { item: any }) => {
 console.log(props.item);
  const timeStamp = Date.now();
  return (
    <div>
      <a href="/test/test_index">[ back ]</a>
      <input type="hidden" id="item_id" value={props.item.id} />
      <hr />
      <h1>{props.item.title}</h1>
      <p>id: {props.item.id}, {props.item.createdAt}</p>
      <hr />
      <button id="btn_delete">[ delete ]</button>
      {html`<script src="/js/test/delete.js?${timeStamp}"></script>`}
    </div>
  )
}