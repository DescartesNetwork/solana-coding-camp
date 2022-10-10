import { Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Avatar from './avatar'

import useWidth from 'hooks/useWidth'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

import imgBgSpeaker from 'static/images/extra/bg-ranking.png'

export type SpeakersData = { id: string; name: string; position: string }

const SPEAKER_ID: SpeakersData[] = [
  {
    id: '1FHDNV6ubcE051pWpKJkqbdyRK-qHoW6c',
    name: 'Colin Ogoo',
    position: 'Developer Experience Engineer at Solana Foundation',
  },
  {
    id: '1t7b3lb4rkFmmguefCE8o2W4ASUQG2Xoy',
    name: 'Akshay BD',
    position: 'Head of Emerging Markets at Solana Foundation',
  },
  {
    id: '1OP0gBrvm3sm9m_C77pCjBCqrhoUpmRFb',
    name: 'Tamar Menteshashvili',
    position: 'Ecosystem Growth at Solana Labs',
  },
  {
    id: '1GWOLhfydqyHckElp0gVf5250cM09kG7k',
    name: 'Tu Phan',
    position: 'Founder at Sentre Protocol',
  },
  {
    id: '1uekV144CCFYmfhkE7cfmVI5mU-nnQE2c',
    name: 'Thanh Le',
    position: 'Founder at Coin98 Finance',
  },
  {
    id: '19f_NFPEYy6X2qeb2bRWj-Za1JBuUebTT',
    name: 'Jade Vo',
    position: 'Co-lead at Coin98 Ventures',
  },
  {
    id: '1CxhvysTnJvrMeyMsmHWq4wHZbARffooU',
    name: 'Marcus Le',
    position: 'Ecosystem Growth at Coin98 Finance',
  },
  {
    id: '1NWE9FavNZmQ4xsnasm43pJQ_hegiK7hp',
    name: 'Ken Nguyen',
    position: 'Growth at Saros',
  },
  {
    id: '1_pZyCT0zQm7nLe55v96O07xwAV07p63Z',
    name: 'Thuat Nguyen',
    position: 'CEO & Co-founder at Kyros Ventures',
  },
  {
    id: '1eRF--ar-YqwOsKfXb3soVcVta1VFVhUl',
    name: 'Howard Xu',
    position: 'Co-founder at Ancient8',
  },
  {
    id: '1OTzUdRWVf7daS75maJM38hCHqLOEpNrs',
    name: 'Joo Lee',
    position: 'Business Development Lead at Ancient8',
  },
  {
    id: '10eVqz9C9ONy-hM20YKphvdA_gj6FMx3o',
    name: 'Nguyen Dinh Khanh',
    position: 'Chief Of Executive at WolfFun',
  },
  {
    id: '1TRvD016nPQ3_6W8xIR9L03EXgmws1GtB',
    name: 'Tran Khanh Han',
    position: 'Head of Business Development at Wolffun',
  },
  {
    id: '1rAw4B3bmHOkHQpr29Ts0KVgZ4sfO1fbH',
    name: 'Kevin Tung Nguyen',
    position: 'CEO at JobHopin',
  },
  // {
  //   id: '1MC_haCVWj-KVEFFie-6sq-cooqRHpDWL',
  //   name: 'Kien Vuong',
  //   position: 'CEO at Starbots',
  // },
  {
    id: '1QI9Rkun-ywoatA-npJEhSdzC4h7eazXY',
    name: 'Long Vuong',
    position: 'CEO at Solscan',
  },
  // {
  //   id: '1v7cCzeI5rRRVVXJfhL5J2ZWPOGNxy32a',
  //   name: 'Hoang Minh Thien',
  //   position: 'Co-Founder at TradeCoinVietNam',
  // },
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
              {SPEAKER_ID.map(({ id, name, position }, idx) => (
                <Col key={idx}>
                  <Space
                    size={24}
                    direction="vertical"
                    style={{ textAlign: 'center' }}
                  >
                    <Avatar src={PATH_GOOGLE_VIEW_IMG + id} center />
                    <Space
                      direction="vertical"
                      style={{ maxWidth: 180 }}
                      size={0}
                    >
                      <Typography.Title level={5}>{name}</Typography.Title>
                      <Typography.Text
                        type="secondary"
                        style={{ fontWeight: 300 }}
                      >
                        {position}
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
