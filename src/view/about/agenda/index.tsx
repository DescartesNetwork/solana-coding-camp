import { useSelector } from 'react-redux'

import { Col, Image, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import useLanguages from 'hooks/useLanguages'
import { useWidth } from 'hooks/useUI'
import { AppState } from 'store'

import { LanguageType } from 'constant'

import imgAgendaDesk from 'static/images/about/agenda-desktop.svg'
import imgVNAgendaDesk from 'static/images/about/agenda-desktop-vn.svg'
import imgAgendaMobile from 'static/images/about/agenda-mobile.svg'
import imgVNAgendaMobile from 'static/images/about/agenda-vn-mobile.svg'

export const AGENDA_ID = 'agenda'

const BG_AGENDA: Record<LanguageType, any> = {
  en: { desktop: imgAgendaDesk, mobile: imgAgendaMobile },
  vn: { desktop: imgVNAgendaDesk, mobile: imgVNAgendaMobile },
}

const Agenda = () => {
  const language = useSelector((state: AppState) => state.languages.language)
  const system = useLanguages()
  const width = useWidth()
  const isMobile = width < 992

  const imgAgenda = isMobile
    ? BG_AGENDA[language].mobile
    : BG_AGENDA[language].desktop

  return (
    <MaxWidthLayout>
      <Row gutter={[0, 24]} justify="center" id={AGENDA_ID}>
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.about.agenda}
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
