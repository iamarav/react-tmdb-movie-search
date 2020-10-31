import React, { lazy, Suspense } from 'react';

const LazyMovieInfoPage = lazy(() => import('./MovieInfoPage'));

const MovieInfoPage = props => (
  <Suspense fallback={(
    <>
      <div className="mt-5 text-center">
        Loading...
      </div>
    </>
  )}>
    <LazyMovieInfoPage {...props} />
  </Suspense>
);

export default MovieInfoPage;
