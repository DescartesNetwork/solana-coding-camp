import { Card, Col, Row, Space, Typography } from 'antd'
import SpaceBetween from 'components/spaceBetween'
import useLanguages from 'hooks/useLanguages'

import bg from 'static/images/u20tracks/bg.png'

const CardU20Tracks = () => {
  const system = useLanguages()

  return (
    <Card
      bordered={false}
      style={{ overflow: 'hidden', height: '100%' }}
      bodyStyle={{ padding: 56, position: 'relative', height: '100%' }}
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
                {system.prizesChampion}
              </Typography.Title>
            </SpaceBetween>
            <SpaceBetween
              gutter={[24, 24]}
              floatContent={
                <Space direction="vertical">
                  <Typography.Title
                    level={2}
                    style={{ fontWeight: 300 }}
                    type="secondary"
                  >
                    {system.prizes2stRunner}
                  </Typography.Title>
                  <Typography.Title
                    level={1}
                    style={{ color: '#80ECFF', fontSize: 44 }}
                  >
                    $2,000
                  </Typography.Title>
                </Space>
              }
            >
              <Space direction="vertical">
                <Typography.Title
                  level={2}
                  style={{ fontWeight: 300 }}
                  type="secondary"
                >
                  {system.prizes1stRunner}
                </Typography.Title>
                <Typography.Title
                  level={1}
                  style={{ color: '#9945FF', fontSize: 44 }}
                >
                  $3,000
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
