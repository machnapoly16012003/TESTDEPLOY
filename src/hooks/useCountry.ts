import { useMemo } from 'react'
import { City, Country, Province } from '~/@types/models'
import listCountry from '~/constants/country/countryData.json'

const useCountry = ({ country, stateOrProvince }: { country: string; stateOrProvince: string }) => {
  const countriesOptions = useMemo(
    () => listCountry.map((country: Country) => ({ label: country.country_name, value: country.country_name })),
    [listCountry]
  )

  const listProvince = useMemo(
    () => (listCountry.find((c) => c.country_name === (country as string))?.provinces as Province[]) || [],
    [listCountry, country]
  )

  const provincesOptions = useMemo(
    () => listProvince?.map((province: Province) => ({ label: province.province_name, value: province.province_name })),
    [listProvince]
  )

  const listCity = useMemo(
    () => (listProvince.find((p) => p.province_name === (stateOrProvince as string))?.cities as City[]) || [],
    [listProvince, stateOrProvince]
  )

  const citiesOptions = useMemo(
    () => listCity?.map((city: City) => ({ label: city.city_name, value: city.city_name })),
    [listCity]
  )

  return {
    countriesOptions,
    listProvince,
    provincesOptions,
    listCity,
    citiesOptions
  }
}

export default useCountry
