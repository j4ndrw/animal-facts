import { useEffect } from "react";

interface Props {
    name: string;
    host: string;
}

function MFE({ name, host }: Props) {
    const containerId = `mfe-${name}`;

    useEffect(() => {
        const scriptId = `mfe-script-${name}`;

        const renderMFE = () => {
            // @ts-ignore
            window[`render${name}`](containerId);
        };

        if (document.getElementById(scriptId)) {
            renderMFE();
            return;
        }

        fetch(`${host}/manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}/${manifest["src/main.tsx"]["file"]}`;
                script.type = "module";
                script.onload = () => {
                    renderMFE();
                };
                document.head.appendChild(script);
            });

        return () => {
            // @ts-ignore
            window[`unmount${name}`] && window[`unmount${name}`](containerId);
        };
    });

    return <main id={containerId} />;
}

export default MFE;
