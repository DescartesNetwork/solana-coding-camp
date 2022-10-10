import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardTrack, { TrackData } from './cardTrack'

import logoSaros from 'static/images/tracks/logo-saros.svg'
import logoAncient8 from 'static/images/tracks/logo-ancient8.svg'

const TRACKS: TrackData[] = [
  {
    logo: logoSaros,
    value1st: '$6000',
    value2nd: '$2000',
    key: 'StatusUp',
  },
  {
    logo: logoAncient8,
    value1st: '$3500',
    value2nd: '$1500',
    key: 'Game',
  },
]

const Tracks = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Tracks
          </Typography.Title>
        </Col>
        <Col span={24} />
        {TRACKS.map((track, idx) => (
          <Col xs={24} md={12} key={track.value1st}>
            <CardTrack data={track} index={idx} />
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Tracks
