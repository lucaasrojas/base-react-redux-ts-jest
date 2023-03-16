import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
test("Loads App", async () => {
    // ARRANGE
    render(<App />);

    expect(screen.getByText("App")).toBeTruthy();
});
