import { CSSProperties, Fragment, ReactNode, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Button, ButtonProps } from 'antd'

import useLanguages from 'hooks/useLanguages'
import configs from 'configs'

const {
  typeform: { submission },
} = configs

const FIXED_STYLE = { position: 'fixed', bottom: 50, right: 24, zIndex: 9999 }

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
  const { timeline } = useLanguages()
  const { hash } = useLocation()

  const fixedStyle = fixed ? FIXED_STYLE : {}

  const onClick = useCallback(() => {
    const id = `#${submission}`

    console.log(id, 'ud')
    if (hash !== id) return history.push(`/project/${id}`)

    const elmHash = document.querySelector(id)
    if (!!elmHash) return elmHash.scrollIntoView({ behavior: 'smooth' })
  }, [hash, history])

  return (
    <Button
      id={id}
      size={size}
      type={type}
      onClick={onClick}
      style={{ ...fixedStyle, ...style }}
      icon={icon}
    >
      {timeline.dappSubmission}
    </Button>
  )
}

export default RegisterNow
