import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  type LinksFunction,
} from 'react-router';

import '@atpco/atp-web/react';

import atpGlobalCssUrl from '@atpco/atp-web/global.css?url';
import atpNormalizeCssUrl from '@atpco/atp-web/normalize.css?url';
import appStylesUrl from '../styles.css?url';

export const meta: MetaFunction = () => [
  {
    title: 'PriceEye',
  },
];

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: atpNormalizeCssUrl },
  { rel: 'stylesheet', href: atpGlobalCssUrl },
  { rel: 'stylesheet', href: appStylesUrl },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
