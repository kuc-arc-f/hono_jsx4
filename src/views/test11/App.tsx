import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {TestCreateClientJs} from './ClientJs';
//
export const Test11: FC = (props) => {
    return (
    <div>
        <h1>Test11</h1>
        <TestCreateClientJs />
    </div>
    )
}