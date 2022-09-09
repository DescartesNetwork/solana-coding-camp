import { forwardRef } from 'react'
import { CUSTOM_ICONS } from './custom'

type IonIconProps = { name?: string; className?: string; src?: string }
const IonIcon = forwardRef<HTMLElement, IonIconProps>(
  ({ name = '', className, src = '', ...props }, ref) => {
    const cln = className ? 'anticon ' + className : 'anticon'
    return (
      <span className={cln} {...props}>
        {CUSTOM_ICONS[name] ? (
          <ion-icon ref={ref} src={CUSTOM_ICONS[name]} />
        ) : (
          <ion-icon ref={ref} src={src} name={name} />
        )}
      </span>
    )
  },
)

export default IonIcon
