type IonIconProps = { src?: string; name?: string; className?: string }
const IonIcon = ({ name = '', className = '', src = '' }: IonIconProps) => {
  const cln = className ? 'anticon ' + className : 'anticon'
  return (
    <span className={cln}>
      <ion-icon src={src} name={name} />
    </span>
  )
}

export default IonIcon
