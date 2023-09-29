import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
export const TestCreateClientJs: FC = (props) => {
    return (
    <div>
    <hr />
    {html`
    <script>
    console.log("#scriptCode_start:");
    const d = new Date().toString();
    console.log(d);
    //save
    </script>
    `}
    </div>
    );
}