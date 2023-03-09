import React from "react";
import { render, screen } from "@testing-library/react";

import TourpackagesPage from "../TourpackagesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders tourpackages page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TourpackagesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("tourpackages-datatable")).toBeInTheDocument();
    expect(screen.getByRole("tourpackages-add-button")).toBeInTheDocument();
});
