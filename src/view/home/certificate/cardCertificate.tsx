import { Image } from 'antd'
import CardComingSoon from 'components/cardPartner/cardComingSoon'
import { CertificateState } from 'constant'

export const CERTIFICATE_TEXT = {
  [CertificateState.Completion]:
    'Bestowed upon participants who successfully completed the Rust and Solana development training and passing the final test.',
  [CertificateState.Participation]:
    'Bestowed upon participants who actively took part in the Rust and Solana development training conducted at Solana Vietnam Coding Camp.',
}

export type CardCertificateProps = { items: string[] }
const CardCertificate = ({ items }: CardCertificateProps) => {
  return (
    <div className="wrap-card-certi">
      <div className="inner-card-certi">
        {items.map((src, idx) => (
          <div className={`card-certi-item item-${idx + 1}`} key={src}>
            {src in CertificateState ? (
              <CardComingSoon
                label={src}
                bodyStyle={{ minHeight: 'auto' }}
                description={CERTIFICATE_TEXT[src as CertificateState]}
              />
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
