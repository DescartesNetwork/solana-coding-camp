import { Image } from 'antd'
import CardComingSoon from 'components/cardPartner/cardComingSoon'
import { CertificateState } from 'constant'

export type CardCertificateProps = { items: string[] }
const CardCertificate = ({ items }: CardCertificateProps) => {
  return (
    <div className="wrap-card-certi">
      <div className="inner-card-certi">
        {items.map((src, idx) => (
          <div className={`card-certi-item item-${idx + 1}`} key={src}>
            {src in CertificateState ? (
              <CardComingSoon label={src} bodyStyle={{ minHeight: 'auto' }} />
            ) : (
              <Image src={src} preview={false} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardCertificate
