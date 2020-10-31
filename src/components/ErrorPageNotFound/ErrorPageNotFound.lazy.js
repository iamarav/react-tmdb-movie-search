import React, { lazy, Suspense } from 'react';

const LazyErrorPageNotFound = lazy(() => import('./ErrorPageNotFound'));

const ErrorPageNotFound = props => (
  <Suspense fallback={null}>
    <LazyErrorPageNotFound {...props} />
  </Suspense>
);

export default ErrorPageNotFound;
