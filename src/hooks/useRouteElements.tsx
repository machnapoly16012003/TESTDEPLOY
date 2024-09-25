import { useCallback, useMemo } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { PATH_PUBLIC_APP } from '~/constants/paths'
import { BaseLayout } from '~/layouts/baseLayout'
import { Components } from '~/pages/components'
import { Document } from '~/pages/document'
import { GettingStarted } from '~/pages/gettingStarted'
import { Home } from '~/pages/home'
// import { Analysis } from '~/pages/analysis'

function useRouteElements() {
  const removeSlash = useCallback((path: string) => (path.startsWith('/') ? path.slice(1) : path), [])

  const routes = useMemo(
    () => [
      {
        path: '/',
        element: <Navigate to={'/'} />
      },
      {
        path: '',
        element: <BaseLayout />,
        children: [
          {
            index: true,
            path: removeSlash(PATH_PUBLIC_APP.home),
            element: <Home />
          },
          {
            path: removeSlash(PATH_PUBLIC_APP.document),
            element: <Document />
          },
          {
            path: removeSlash(PATH_PUBLIC_APP.gettingStarted),
            element: <GettingStarted />
          },
          {
            path: removeSlash(PATH_PUBLIC_APP.components),
            element: <Components />
          }
        ]
      }
      // {
      //   path: '',
      //   element: <SimpleLayout />,
      //   children: [
      //     {
      //       index: true,
      //       path: removeSlash(PATH_PUBLIC_APP.analysis),
      //       element: <Analysis />
      //     }
      //   ]
      // }
    ],
    []
  )

  const routeElements = useRoutes(routes)

  return routeElements
}

export default useRouteElements
