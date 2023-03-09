import React from "react";
import { render, screen } from "@testing-library/react";

import ContactdetailsPage from "../ContactdetailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contactdetails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContactdetailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contactdetails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("contactdetails-add-button")).toBeInTheDocument();
});
