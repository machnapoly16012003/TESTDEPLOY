import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'

import useQueryParams from '~/hooks/useQueryParams'
import { ListConfig } from '~/@types/common'

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig: QueryConfig = omitBy(
    {
      checkoutType: queryParams.checkoutType,
      subscription: queryParams.subscription,
      productQuantity: queryParams.productQuantity
    },
    isUndefined
  )
  return queryConfig
}

export default useQueryConfig
