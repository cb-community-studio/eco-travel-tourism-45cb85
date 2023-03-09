import React from "react";
import { render, screen } from "@testing-library/react";

import ActivityinfoEditDialogComponent from "../ActivityinfoEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders activityinfo edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ActivityinfoEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("activityinfo-edit-dialog-component")).toBeInTheDocument();
});
