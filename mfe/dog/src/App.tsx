import { Button } from "@mantine/core";

import { BrowserHistory, createBrowserHistory } from "history";
interface Props {
    history?: BrowserHistory;
}

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }: Props) {
    return (
        <div>
            Dog
            <Button>boop</Button>
        </div>
    );
}

export default App;
