import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';

export type NextPageWithTemplate = NextPage & {
  getTemplate?: (page: React.ReactElement) => React.ReactNode,
};
export type AppPropsWithTemplate = AppProps & {
  Component: NextPageWithTemplate,
};
