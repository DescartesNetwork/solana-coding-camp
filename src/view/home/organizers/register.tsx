import { useHistory } from 'react-router-dom'

import { Button, Col, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import useLanguages from 'hooks/useLanguages'
import configs from 'configs'

const {
  typeform: { registration },
} = configs

const VIDEO_ID = ['uKk6bQi_cnI', '9204BBCLO9I', 'aRgUx4shcyk']

const Register = () => {
  const system = useLanguages()
  const history = useHistory()

  const subRegister: string[] = [
    system.organizers.labelLearn,
    system.organizers.labelJoin,
    system.organizers.labelWin,
  ]
  return (
    <Row gutter={[0, 24]}>
      <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
        <Row gutter={[0, 32]} style={{ position: 'sticky', top: 24 }}>
          <Col span={24}>
            <Typography.Title level={1} style={{ fontSize: 72 }}>
              {system.organizers.videoTitle}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Space direction="vertical" size={16}>
              {subRegister.map((sub, idx) => (
                <Space key={idx}>
                  <Typography.Text
                    style={{
                      color: '#14F195',
                      fontSize: 24,
                      fontWeight: 300,
                    }}
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
              <Button
                size="large"
                type="primary"
                onClick={() => history.push(`/about/#${registration}`)}
              >
                {system.CTA.register}
              </Button>
              <Button size="large" onClick={() => history.push('/about')}>
                {system.CTA.more}
              </Button>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
        <Row gutter={[24, 24]}>
          {VIDEO_ID.map((id, idx) => (
            <Col span={24} key={idx}>
              <iframe
                width="100%"
                style={{ minHeight: 400 }}
                src={`https://www.youtube.com/embed/${id}`}
                title="Solana coding camp 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default Register
