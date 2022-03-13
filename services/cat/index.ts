import jackrabbit from "jackrabbit";

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// @ts-ignore
const brokerURL: string = process.env.RABBIT_URL;

const brokerCtx = jackrabbit(brokerURL).default();

let factNumber = 1;

brokerCtx.publish(
    {
        imageSrc:
            "https://preview.redd.it/rnax1b057w531.jpg?auto=webp&s=1b6afc9f28a2318528586b07729a7b9366617dd3",
        text: `Fact number ${factNumber}`,
    },
    { key: "catFactStream" }
);
brokerCtx.on("drain", process.exit);
