import React, { lazy, Suspense } from 'react';

const LazyMovieSearchForm = lazy(() => import('./MovieSearchForm'));

const MovieSearchForm = props => (
  <Suspense fallback={null}>
    <LazyMovieSearchForm {...props} />
  </Suspense>
);

export default MovieSearchForm;
