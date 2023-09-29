import type { FC } from 'hono/jsx'
//
export const TestShow: FC<{ item: any }> = (props: { item: any }) => {
 console.log(props.item);
  return (
    <div>
      <a href="/test/test_index">[ back ]</a>
      <hr />
      <h1>{props.item.title}</h1>
      <p>id{props.item.id}, {props.item.createdAt}</p>
      <hr />
    </div>
  )
}