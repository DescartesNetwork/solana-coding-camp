import { Affix, Button, Card, Col, Row } from 'antd'
import IonIcon from 'components/IonIcon'

const SOCIAL_BTN = [
  {
    icon: 'logo-telegram',
    link: '',
  },
  {
    icon: 'logo-twitter',
    link: '',
  },
  {
    icon: 'logo-discord',
    link: '',
  },
]

const SocialFixed = () => {
  return (
    <Affix className="group-btn-social" offsetTop={150}>
      <Card
        bordered={false}
        bodyStyle={{ padding: 0 }}
        style={{
          borderRadius: '8px 0 0 8px',
          background: 'transparent',
          overflow: 'hidden',
        }}
      >
        <Row gutter={[2, 2]} style={{ flexDirection: 'column' }}>
          {SOCIAL_BTN.map((social, idx) => (
            <Col style={{ background: '#fff' }} key={idx}>
              <Button
                style={{
                  borderRadius: 0,
                  border: 'none',
                  background: 'transparent',
                  color: '#000',
                }}
                size="small"
                onClick={() => window.open(social.link, '_blank')}
                icon={<IonIcon name={social.icon} />}
              />
            </Col>
          ))}
        </Row>
      </Card>
    </Affix>
  )
}

export default SocialFixed
