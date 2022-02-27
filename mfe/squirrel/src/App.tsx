import { Button } from "ui/Button";

import { BrowserHistory, createBrowserHistory } from "history";
interface Props {
    history?: BrowserHistory;
}

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }: Props) {
    return (
        <div>
            Squirrel
            <Button />
        </div>
    );
}

export default App;
