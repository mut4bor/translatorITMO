import * as style from './styles.module.css'
import React, { useState } from 'react'
import Field from './components/Input'
import Translate from './components/TranslateHeading'

export default function App() {
  const [text, setText] = useState('Реакция')

  return (
    <div className={style.container}>
      <Field label="Введите русские слова" onChange={setText} value={text} />
      <Translate text={text} />
    </div>
  )
}
