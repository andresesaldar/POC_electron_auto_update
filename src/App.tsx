import { FC } from 'react';
import {createRoot} from 'react-dom/client';
import Counter from './Counter';

const version = "26";

const App: FC = () => (
    <>
        <h1>Auto update poc. Updated 🙌</h1>
        <Counter/>
        <div style={{paddingTop: "20px"}}>
            <b>Updated again {version}.</b>
            <br/>
            <b>This is the version {version}</b>
        </div>
        <br/>
        <button onClick={() => alert(`AMAZING Version ${version}!!!`)}>CLick this if u think auto update is AMAZING!</button>
    </>
)

const root = createRoot(document.getElementById("root"))
root.render(<App/>)