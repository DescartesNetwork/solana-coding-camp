import { Card, Col, Row, Typography } from 'antd'

const Leaderboard = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} style={{ marginTop: 18 }}>
        <Typography.Text>Leaderboard</Typography.Text>
      </Col>
      <Col span={24}>
        <Card bordered={false}>Hehe</Card>
      </Col>
    </Row>
  )
}

export default Leaderboard
