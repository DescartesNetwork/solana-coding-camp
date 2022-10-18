import { CSSProperties, Fragment, ReactNode, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Button, ButtonProps } from 'antd'

import useLanguages from 'hooks/useLanguages'
import configs from 'configs'

const {
  typeform: { registration },
} = configs

const FIXED_STYLE = { position: 'fixed', bottom: 50, right: 24 }

export type RegisterNowProps = {
  type?: ButtonProps['type']
  style?: CSSProperties
  size?: ButtonProps['size']
  fixed?: boolean
  id?: string
  icon?: ReactNode
}
const RegisterNow = ({
  style,
  type = 'primary',
  size = 'large',
  fixed = false,
  id = '',
  icon = <Fragment />,
}: RegisterNowProps) => {
  const history = useHistory()
  const { CTA } = useLanguages()
  const { hash } = useLocation()

  const fixedStyle = fixed ? FIXED_STYLE : {}

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
      icon={icon}
    >
      {CTA.register}
    </Button>
  )
}

export default RegisterNow
