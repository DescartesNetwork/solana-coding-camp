import { Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Avatar from './avatar'

import useWidth from 'hooks/useWidth'

import imgBgSpeaker from 'static/images/extra/bg-ranking.png'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

const SPEAKER_ID = [
  '1GWOLhfydqyHckElp0gVf5250cM09kG7k',
  '1TRvD016nPQ3_6W8xIR9L03EXgmws1GtB',
  '1_pZyCT0zQm7nLe55v96O07xwAV07p63Z',
  '1uekV144CCFYmfhkE7cfmVI5mU-nnQE2c',
  '1OP0gBrvm3sm9m_C77pCjBCqrhoUpmRFb',
  '10eVqz9C9ONy-hM20YKphvdA_gj6FMx3o',
  '1CxhvysTnJvrMeyMsmHWq4wHZbARffooU',
  '1QI9Rkun-ywoatA-npJEhSdzC4h7eazXY',
  '1MC_haCVWj-KVEFFie-6sq-cooqRHpDWL',
  '1rAw4B3bmHOkHQpr29Ts0KVgZ4sfO1fbH',
  '1OTzUdRWVf7daS75maJM38hCHqLOEpNrs',
  '19f_NFPEYy6X2qeb2bRWj-Za1JBuUebTT',
  '1eRF--ar-YqwOsKfXb3soVcVta1VFVhUl',
  '1v7cCzeI5rRRVVXJfhL5J2ZWPOGNxy32a',
  '1_uvYY3SYzimrOzmzc1rhryF7BSdHZAnW',
  '1t7b3lb4rkFmmguefCE8o2W4ASUQG2Xoy',
]

const Speakers = () => {
  const width = useWidth()
  const avatarJustify = width < 575 ? 'center' : 'space-between'

  return (
    <div className="bg-speaker-gradient">
      <MaxWidthLayout style={{ overflow: 'hidden' }}>
        <Row gutter={[24, 72]} justify="center">
          <Col>
            <Typography.Title level={2} className="text-title">
              Speakers & Judges
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Row gutter={[64, 64]} justify={avatarJustify}>
              {SPEAKER_ID.map((speaker, idx) => (
                <Col key={idx}>
                  <Space
                    size={24}
                    direction="vertical"
                    style={{ textAlign: 'center' }}
                  >
                    <Avatar src={PATH_GOOGLE_VIEW_IMG + speaker} center />
                    <Space
                      direction="vertical"
                      style={{ maxWidth: 180 }}
                      size={0}
                    >
                      <Typography.Title level={5}>Tu Phan</Typography.Title>
                      <Typography.Text
                        type="secondary"
                        style={{ fontWeight: 300 }}
                      >
                        CEO & Co-founder of Coin98 Finance
                      </Typography.Text>
                    </Space>
                  </Space>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </MaxWidthLayout>
      <div className="img-speaker-bg">
        <Image src={imgBgSpeaker} preview={false} />
      </div>
    </div>
  )
}

export default Speakers
