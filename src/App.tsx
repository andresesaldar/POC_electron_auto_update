import { FC } from 'react';
import {createRoot} from 'react-dom/client';
import Counter from './Counter';

const App: FC = () => (
    <>
        <h1>Auto update poc. Updated 🙌</h1>
        <Counter/>
        <div style={{paddingTop: "20px"}}>
            <b>Updated again 17.</b>
        </div>
        <br/>
        <button onClick={() => alert("AMAZING!")}>CLick this if u think auto update is AMAZING!</button>
    </>
)

const root = createRoot(document.getElementById("root"))
root.render(<App/>)