import { Button, Card, Col, Row } from 'antd'
import IonIcon from 'components/IonIcon'

const SOCIAL_BTN = [
  {
    icon: 'logo-telegram',
    link: 'https://t.me/solanadevsvietnam',
  },
  {
    icon: 'logo-twitter',
    link: 'https://twitter.com/SuperteamVN',
  },
  {
    icon: 'logo-c-discord',
    link: 'https://discord.com/invite/solanau',
  },
]

const SocialFixed = () => {
  return (
    <div className="group-btn-social">
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
    </div>
  )
}

export default SocialFixed
