import React from "react";
import { Wrapper, Content } from "./Grid.styles";

const Grid = (prop) => (
    <Wrapper>
         <h1>{ prop.header }</h1>
        <Content>               
            {prop.children}
        </Content>
    </Wrapper>
);

export default Grid;