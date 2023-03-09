import React from "react";
import { render, screen } from "@testing-library/react";

import PersonaldetailsPage from "../PersonaldetailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personaldetails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PersonaldetailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personaldetails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("personaldetails-add-button")).toBeInTheDocument();
});
