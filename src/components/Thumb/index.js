import React from "react";
import { Image } from "./Thumb.styles";

const Thumb = (prop) => (
    <div>
        <Image src={prop.image} />
    </div>
);

export default Thumb;