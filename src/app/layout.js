'use client'
import './globals.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime : 1000 * 60 * 60 * 24
        },
    },
})

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <QueryClientProvider client={queryClient}>
            <body>{children}</body>
        </QueryClientProvider>
        </html>
    )
}
