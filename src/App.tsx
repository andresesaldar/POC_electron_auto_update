import { FC } from 'react';
import {createRoot} from 'react-dom/client';
import Counter from './Counter';

const App: FC = () => (
    <>
        <h1>Auto update poc. Updated 🙌</h1>
        <Counter/>
        <div style={{paddingTop: "20px"}}>
            <b>Updated again 15.</b>
        </div>
    </>
)

const root = createRoot(document.getElementById("root"))
root.render(<App/>)