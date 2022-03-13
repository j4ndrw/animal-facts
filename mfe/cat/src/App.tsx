import { Button } from "@mantine/core";

interface Props<DataType = unknown> {
    data: unknown;
    standalone?: boolean;
}

function App({ data, standalone = false }: Props) {
    return (
        <div>
            Cat
            <Button>boop</Button>
        </div>
    );
}

export default App;
