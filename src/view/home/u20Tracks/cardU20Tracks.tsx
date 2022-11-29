import { useMemo } from 'react'

import { Card, Col, Image, Row, Space, Typography } from 'antd'
import SpaceBetween from 'components/spaceBetween'
import useLanguages from 'hooks/useLanguages'

import { useWidth } from 'hooks/useUI'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

import bg from 'static/images/u20tracks/bg.png'
import logoDao from 'static/images/logo/logo-dao.svg'

const CardU20Tracks = () => {
  const system = useLanguages()

  const width = useWidth()
  const isMobile = width < 992

  const cardPadding = useMemo(() => (isMobile ? 24 : 56), [isMobile])
  const MindX_IMG = PATH_GOOGLE_VIEW_IMG + '1S7UurQLMCuFEcirsJrFZKjtqDd7wouKB' //MindX

  return (
    <Card
      bordered={false}
      style={{ overflow: 'hidden', height: '100%' }}
      bodyStyle={{ padding: cardPadding, position: 'relative', height: '100%' }}
    >
      <Row gutter={[24, 24]} align="bottom">
        <Col
          xs={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          style={{ position: 'unset' }}
        >
          <div className="u20track-card-bg">
            <img src={bg} alt="bg" />
          </div>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <Space style={{ width: '100%' }} direction="vertical" size={48}>
            <SpaceBetween
              gutter={[24, 24]}
              floatContent={
                <Typography.Title
                  level={1}
                  style={{ color: '#14F195', fontSize: 72 }}
                >
                  $5,000
                </Typography.Title>
              }
            >
              <Typography.Title level={2}>
                {system.prize1stPlace}
              </Typography.Title>
            </SpaceBetween>
            <SpaceBetween
              gutter={[24, 24]}
              floatContent={
                <Typography.Title
                  level={1}
                  style={{ color: '#80ECFF', fontSize: 44 }}
                >
                  $2,000
                </Typography.Title>
              }
            >
              <Typography.Title
                level={2}
                style={{ fontWeight: 300 }}
                type="secondary"
              >
                {system.prize2nd}
              </Typography.Title>
            </SpaceBetween>

            <SpaceBetween
              gutter={[24, 24]}
              floatContent={
                <Image
                  width={140}
                  src={MindX_IMG}
                  alt="partner"
                  preview={false}
                />
              }
              align="bottom"
            >
              <Space direction="vertical">
                <Typography.Text type="secondary">Sponsored by</Typography.Text>
                <Typography.Title
                  level={2}
                  style={{ fontWeight: 300 }}
                  type="secondary"
                >
                  <Image
                    width={240}
                    src={logoDao}
                    alt="partner"
                    preview={false}
                  />
                </Typography.Title>
              </Space>
            </SpaceBetween>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default CardU20Tracks
