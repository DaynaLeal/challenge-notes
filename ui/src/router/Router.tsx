import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import Header from 'components/header/Header'

/*
 * These components are lazy loaded and code split
 * Meaning that they are actually completely separate files after the bundler
 * does it's thing. This is fairly advanced, so don't worry about the specifics.
 * Just wanted you to see the other way of importing components
 *
 */
const Landing = lazy(() => import('views/Main'))
const SongTable = lazy(() => import('views/SongTable'))

const Router = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading..</div>}>
        <main style={{ marginTop: '30px' }}>
          <Switch>
            <Route path='/table' render={(routeProps: RouteProps) => <SongTable routeProps={routeProps} />} />
            <Route path='/' component={Landing} />
            <Redirect from='/' to='/' />
          </Switch>
        </main>
      </Suspense>
    </>
  )
}

export default Router
