import { Col, Divider, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Camp1 from './camp1'
import Camp2 from './camp2'

const SUPERTEAM_SOCIALS = [
  { label: 'IDEAS', link: 'https://solana.com/summercamp/ideas' },
  {
    label: 'INSTAGRANTS',
    link: 'https://superteam.fun/instagrants/solana-foundation-vietnam-grants',
  },
  { label: 'COOKBOOK', link: 'https://solanacookbook.com/vi' },
]

const Containers = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[0, 56]}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Space>
            {SUPERTEAM_SOCIALS.map(({ label, link }, idx) => (
              <Space key={label}>
                <Typography.Text
                  onClick={() => window.open(link, '_blank')}
                  className="socials"
                >
                  {label}
                </Typography.Text>
                {idx !== 2 && <Divider type="vertical" />}
              </Space>
            ))}
          </Space>
        </Col>
        <Col span={24}>
          <Camp2 />
        </Col>
        <Col span={24}>
          <Camp1 />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Containers
