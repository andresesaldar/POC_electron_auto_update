import { FC } from 'react';
import {createRoot} from 'react-dom/client';
import Counter from './Counter';

const App: FC = () => (
    <>
        <h1>Auto update poc</h1>
        <Counter/>
    </>
)

const root = createRoot(document.getElementById("root"))
root.render(<App/>)