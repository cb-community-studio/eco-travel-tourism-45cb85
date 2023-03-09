import React from "react";
import { render, screen } from "@testing-library/react";

import ActivityinfoPage from "../ActivityinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders activityinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ActivityinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("activityinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("activityinfo-add-button")).toBeInTheDocument();
});
