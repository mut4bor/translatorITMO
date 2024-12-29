import React from 'react'
import * as style from './style.module.css'

export default ({ label, value, onChange }) => {
  return (
    <label className={style.label}>
      <span>{label}</span>
      <input
        className={`${style.input} huy`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}
