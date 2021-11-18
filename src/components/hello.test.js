import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import {act} from "react-dom/test-utils";
import Hello from "./hello";

let container = null;

//setup
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild( container );
})


//clean
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it("renders with or without a name", () => {
    act( () => {
        render(<Hello/>, container);
    });
    expect(container.textContent).toBe("Nobody Here!");

    act( () => {
        render(<Hello name = "Jenny"/>, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");

    act( () => {
        render(<Hello name = "Rose"/>, container);
    });
    expect(container.textContent).toBe("Hello, Rose!"); //fail

})