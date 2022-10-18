import { CSSProperties, useCallback, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Button, ButtonProps } from 'antd'

import useLanguages from 'hooks/useLanguages'
import configs from 'configs'

import './index.less'

const {
  typeform: { registration },
} = configs

const FIXED_STYLE = { position: 'fixed', bottom: 50, right: 24 }
const VISIBLE_HEIGHT = 250
const FADEOUT_CLN = 'fadeout-cln'
const FADEIN_CLN = 'fadein-cln'

export type RegisterNowProps = {
  type?: ButtonProps['type']
  style?: CSSProperties
  size?: ButtonProps['size']
  fixed?: boolean
  id?: string
}
const RegisterNow = ({
  style,
  type = 'primary',
  size = 'large',
  fixed = false,
  id = '',
}: RegisterNowProps) => {
  const history = useHistory()
  const { CTA } = useLanguages()
  const { hash } = useLocation()

  const fixedStyle = fixed ? FIXED_STYLE : {}

  const onAnimationStaticBtn = useCallback((elm: HTMLElement) => {
    const top = elm.getBoundingClientRect().y

    if (top > VISIBLE_HEIGHT)
      return elm.classList.replace(FADEOUT_CLN, FADEIN_CLN)
    elm.classList.remove(FADEIN_CLN)
    return elm.classList.add(FADEOUT_CLN)
  }, [])

  const onScroll = useCallback(() => {
    const staticBtn = document.getElementById(id)
    if (!fixed && !!staticBtn) onAnimationStaticBtn(staticBtn)
  }, [fixed, id, onAnimationStaticBtn])

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const onClick = useCallback(() => {
    const id = `#${registration}`
    if (hash !== id) return history.push(`/about/${id}`)

    const elmHash = document.querySelector(id)
    if (!!elmHash) return elmHash.scrollIntoView({ behavior: 'smooth' })
  }, [hash, history])

  return (
    <Button
      id={id}
      size={size}
      type={type}
      className={fixed ? 'btn-register btn-fixed' : 'btn-register'}
      onClick={onClick}
      style={{ ...fixedStyle, ...style }}
    >
      {CTA.register}
    </Button>
  )
}

export default RegisterNow
