import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as style from './style.module.css'

const doTranslation = async (text) => {
  try {
    const { data } = await axios.get(
      `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20241229T001736Z.a3917735e60412ff.00ad3ec47fc580e938c0f66054ee120679362fd1&lang=ru-en&text=${text}`,
    )

    return data.def[0].text
  } catch (err) {
    return ''
  }
}

export default ({ text }) => {
  const [translated, setTranslated] = useState('')

  useEffect(() => {
    if (!text) {
      return
    }

    doTranslation(text).then(setTranslated)
  }, [text])

  useEffect(() => {
    console.log('translated', doTranslation(text))
  }, [translated])

  return (
    <h1 className={style.heading}>
      {translated !== '' ? translated : 'Перевод'}
    </h1>
  )
}
