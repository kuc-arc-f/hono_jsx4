import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
export const TaskCreate: FC = (props) => {
    const timeStamp = Date.now();
    return (
    <div>
        <h1>Create</h1>
        <hr />
        <label>Title:</label>
        <input type="text" id="title" />
        <hr />
        <button id="save">Save</button>
        {html`<script src="/js/tasks/create.js?${timeStamp}"></script>`}        
    </div>
    )
}