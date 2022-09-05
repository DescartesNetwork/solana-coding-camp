import { Button, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/IonIcon'

const SUB_REGISTER = [
  'Learn the fundamentals of Solana coding through our series of online and offline workshops.',
  'Join an exclusive group of 150 talented builders and bring groundbreaking ideas into brilliant Web3 apps on Solana.',
  'Win $100,000 and get a pass to our Private Pitching Date with international VCs and angel investors.',
]

const Register = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Typography.Title level={1} style={{ fontSize: 64 }}>
              What value does the
              <br />
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
      <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
        <iframe
          width="100%"
          style={{ minHeight: 400 }}
          src="https://www.youtube.com/embed/x48VAXbAXTs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Col>
    </Row>
  )
}

export default Register
