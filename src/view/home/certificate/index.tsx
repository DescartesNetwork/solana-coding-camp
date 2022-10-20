import { useMemo } from 'react'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import useLanguages from 'hooks/useLanguages'
import CardCertificate from './cardCertificate'

import { CertificateState } from 'constant'
import { useWidth } from 'hooks/useUI'

import Cert1 from 'static/images/certificate/cer1.png'
import Cert2 from 'static/images/certificate/cer2.png'

import './index.less'

const Certificate = () => {
  const system = useLanguages()
  const width = useWidth()

  const isMobile = width < 992
  const rowGap = useMemo(() => (isMobile ? 80 : 160), [isMobile])
  const cerGap = useMemo(() => (isMobile ? 60 : 180), [isMobile])

  return (
    <MaxWidthLayout>
      <Row gutter={[24, rowGap]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.certificate.title}
          </Typography.Title>
        </Col>
        <Col span={24} style={{ marginBottom: 80 }}>
          <Row gutter={[cerGap, cerGap]} justify="center">
            <Col>
              <CardCertificate items={[CertificateState.Completion, Cert1]} />
            </Col>
            <Col>
              <CardCertificate
                items={[Cert2, CertificateState.Participation]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Certificate
