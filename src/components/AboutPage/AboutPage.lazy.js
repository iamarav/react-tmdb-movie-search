import React, { lazy, Suspense } from 'react';

const LazyAboutPage = lazy(() => import('./AboutPage'));

const AboutPage = props => (
  <Suspense fallback={null}>
    <LazyAboutPage {...props} />
  </Suspense>
);

export default AboutPage;
