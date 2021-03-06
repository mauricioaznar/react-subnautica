import * as React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { ThemeProvider } from "./theme-provider";
import { SnackbarProvider } from "notistack";

interface ProvidersProps {
    children: React.ReactNode[] | React.ReactNode;
    store: any;
}

export const Providers = ({ children, store }: ProvidersProps) => {
    return (
        <StoreProvider store={store}>
            <Router>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <ThemeProvider>
                        <SnackbarProvider
                            maxSnack={6}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            {children}
                        </SnackbarProvider>
                    </ThemeProvider>
                </LocalizationProvider>
            </Router>
        </StoreProvider>
    );
};
