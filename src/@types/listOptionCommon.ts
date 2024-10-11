import { OptionSelect } from '~/@types/common'
import { Gender } from './enums'

export const FILTER_DAY: OptionSelect[] = [
  { value: '1d', label: 'Daily' },
  { value: '1m', label: 'Monthly' },
  { value: '1y', label: 'Yearly' }
]

export const LIST_LANGUAGE_OPTIONS: OptionSelect[] = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'vi',
    label: 'Chinese'
  },
  {
    value: 'en',
    label: 'Japanese'
  },
  {
    value: 'vi',
    label: 'Korean'
  },
  {
    value: 'en',
    label: 'Fracais'
  },
  {
    value: 'vi',
    label: 'Vietnamese'
  },
  {
    value: 'en',
    label: 'Português'
  },
  {
    value: 'vi',
    label: 'Italiano'
  },
  {
    value: 'en',
    label: 'Cestina'
  },
  {
    value: 'vi',
    label: 'Bahasa'
  }
]

export const LIST_GENDER_OPTIONS: OptionSelect[] = [
  {
    value: Gender.MALE,
    label: 'Male'
  },
  {
    value: Gender.FEMALE,
    label: 'Female'
  }
]
