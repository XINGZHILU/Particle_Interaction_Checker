import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import Script from "next/script";


export const metadata: Metadata = {
    title: "Particle Reaction Validator",
    description: "For AQA A Level Physics",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
                <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></Script>
                <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></Script>
            </head>
            <body>
                <MantineProvider><div className='p-2'>
                    {children}
                </div></MantineProvider>
                
            </body>
        </html>
    );
}
