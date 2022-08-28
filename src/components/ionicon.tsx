type IonIconProps = { name?: string; className?: string }
const IonIcon = ({ name = '', className = '' }: IonIconProps) => {
  const cln = className ? 'anticon ' + className : 'anticon'
  return (
    <span className={cln}>
      <ion-icon name={name} />
    </span>
  )
}

export default IonIcon
