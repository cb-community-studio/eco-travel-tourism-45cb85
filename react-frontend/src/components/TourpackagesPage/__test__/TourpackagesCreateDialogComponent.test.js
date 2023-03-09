import React from "react";
import { render, screen } from "@testing-library/react";

import TourpackagesCreateDialogComponent from "../TourpackagesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tourpackages create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TourpackagesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tourpackages-create-dialog-component")).toBeInTheDocument();
});
