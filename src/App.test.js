import React from 'react';
import App from "./App";

import { render , fireEvent } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";

test("renders", () => {
    const { getByText, getByLabelText } = render(<App/>)

    getByText("ToDos");
    getByLabelText("what's in it??");
    getByText("Add #1");
})


test("allows user to add items correctly", () => {
    const { getByText, getByLabelText } = render(<App/>)

    const inputEl = getByLabelText("what's in it??")
    fireEvent.change(inputEl, {
        target: {
            value: "Laxmi"
        }
    })
    fireEvent.click(getByText("Add #1"));

    getByText("Laxmi");
    getByText("Add #2")

    
})