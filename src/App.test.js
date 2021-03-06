import React from "react"
import { render } from "@testing-library/react"
import App from "./App"


describe("Tests App", () => {
    test("renders App w/o errors", () => {
        render(<App />);
    });
});