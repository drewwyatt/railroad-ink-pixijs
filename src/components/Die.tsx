import React, { DetailedHTMLProps, FC, SelectHTMLAttributes, useCallback } from 'react'
import { flip, includes } from 'ramda'
import { Die as Model, DieFace } from '../models'

const DEFAULT_VALUE = undefined

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>
type Props = Omit<SelectProps, 'onChange' | 'value'> & {
  faces: Model
  value: DieFace | undefined
  onChange(dieFace: DieFace | typeof DEFAULT_VALUE): void
}

const Die: FC<Props> = ({ faces, onChange, ...selectProps }) => {
  const isDieFace = useCallback(flip(includes)(faces), [faces]) as (
    selection: any,
  ) => selection is DieFace
  const sanitizedOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (isDieFace(e.target.value)) {
        onChange(e.target.value)
      } else {
        onChange(DEFAULT_VALUE)
      }
    },
    [onChange],
  )
  return (
    <select onChange={sanitizedOnChange} {...selectProps}>
      <option>Select a route</option>
      {faces.map(toOption)}
    </select>
  )
}

const toOption = (face: DieFace) => (
  <option key={face} value={face}>
    {face}
  </option>
)

export default Die
