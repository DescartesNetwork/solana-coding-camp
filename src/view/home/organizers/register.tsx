import { Button, Card, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/ionicon'

const SUB_REGISTER = [
  'Learn the fundamentals of Solana coding through our series of online and offline workshops.',
  'Join an exclusive group of 150 talented builders and bring groundbreaking ideas into brilliant Web3 apps on Solana.',
  'Win $100,000 and get a pass to our Private Pitching Date with international VCs and angel investors.',
]

const Register = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={14}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Typography.Title level={1} className="text-title">
              What value does the{' '}
              <span className="text-gradient">Web3 coding camp</span> create
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Space direction="vertical" size={16}>
              {SUB_REGISTER.map((sub, idx) => (
                <Space key={idx}>
                  <Typography.Text
                    style={{ color: '#14F195', fontSize: 24, fontWeight: 300 }}
                  >
                    <IonIcon name="checkmark-circle-outline" />
                  </Typography.Text>
                  <Typography.Text style={{ fontSize: 22, fontWeight: 300 }}>
                    {sub}
                  </Typography.Text>
                </Space>
              ))}
            </Space>
          </Col>
          <Col span={24}>
            <Space>
              <Button size="large" type="primary">
                REGISTER NOW
              </Button>
              <Button size="large">MORE INFO</Button>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col xs={24} lg={10}>
        <Card style={{ height: '100%' }}></Card>
      </Col>
    </Row>
  )
}

export default Register
