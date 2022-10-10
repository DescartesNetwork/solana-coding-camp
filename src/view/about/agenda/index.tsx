import { Col, Image, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import useWidth from 'hooks/useWidth'

import imgAgendaDesk from 'static/images/about/agenda-desktop.svg'
import imgAgendaMobile from 'static/images/about/agenda-mobile.svg'

export const AGENDA_ID = 'agenda_elm'

const Agenda = () => {
  const width = useWidth()
  const isMobile = width < 992
  const imgAgenda = isMobile ? imgAgendaMobile : imgAgendaDesk

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center" id={AGENDA_ID}>
        <Col>
          <Typography.Title level={2} className="text-title">
            Agenda
          </Typography.Title>
        </Col>
        <Col span={24} />
        <Col span={24}>
          <Image
            src={imgAgenda}
            style={{ pointerEvents: 'none', userSelect: 'none' }}
            preview={false}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Agenda
