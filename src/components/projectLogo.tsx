import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Avatar, Col, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { AppState } from 'store'
import { getProjectId } from 'hooks/useUpvote'

type ProjectLogoProps = {
  name: string
  size?: number
}

const ProjectLogo = ({ name, size = 48 }: ProjectLogoProps) => {
  const projects = useSelector((state: AppState) => state.projects)
  const id = useMemo(() => getProjectId(name), [name])
  const history = useHistory()

  const onDetails = useCallback(
    () => history.push(`/project/${name}`),
    [history, name],
  )

  return (
    <Row gutter={[24, 12]}>
      <Col span={24} style={{ cursor: 'pointer' }} onClick={onDetails}>
        <Space direction="vertical" align="center">
          <Avatar size={size} shape="square" src={projects[id].logo}>
            <IonIcon name="image-outline" />
          </Avatar>
          <Typography.Paragraph
            type="secondary"
            style={{ width: size, textAlign: 'center' }}
            ellipsis
          >
            {name}
          </Typography.Paragraph>
        </Space>
      </Col>
    </Row>
  )
}

export default ProjectLogo
