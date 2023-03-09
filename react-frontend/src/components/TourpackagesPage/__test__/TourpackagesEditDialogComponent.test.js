import React from "react";
import { render, screen } from "@testing-library/react";

import TourpackagesEditDialogComponent from "../TourpackagesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tourpackages edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TourpackagesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tourpackages-edit-dialog-component")).toBeInTheDocument();
});
