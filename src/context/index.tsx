import React, {ReactNode} from "react";
import {AuthProvider} from "./auth-context";
import {QueryClient,QueryClientProvider} from "react-query"

export const AppProviders = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>;
        </QueryClientProvider>
    );
};