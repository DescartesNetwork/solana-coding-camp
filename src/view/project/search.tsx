import { useMemo, useState } from 'react'
import lunr from 'lunr'

import { Col, Empty, Input, Popover, Row, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import ProjectLogo from 'components/projectLogo'

import { useProjects } from 'hooks/useProjects'
import useLanguages from 'hooks/useLanguages'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const projects = useProjects()
  const { project } = useLanguages()

  const engine = useMemo(() => {
    return lunr(function () {
      this.ref('name')
      this.field('name')
      this.field('author')
      this.field('description')
      this.field('category')
      projects.forEach((project) => this.add(project))
    })
  }, [projects])

  const result = useMemo(() => {
    if (keyword.length < 2) return undefined
    const fuzzy = `*${keyword}*`
    return engine.search(fuzzy)
  }, [keyword, engine])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Popover
          placement="bottom"
          overlayStyle={{ width: 260 }}
          trigger="focus"
          content={
            <Row
              gutter={[12, 12]}
              justify={!result?.length ? 'center' : 'start'}
            >
              <Col span={24}>
                <Typography.Text type="secondary">
                  {project.results}
                </Typography.Text>
              </Col>
              {!result?.length ? (
                <Col>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Col>
              ) : (
                result.map(({ ref: name }) => (
                  <Col id={name}>
                    <ProjectLogo name={name} />
                  </Col>
                ))
              )}
            </Row>
          }
        >
          <Input
            prefix={
              <IonIcon name="search-outline" style={{ marginRight: 24 }} />
            }
            placeholder={project.search}
            size="large"
            bordered={false}
            style={{ backgroundColor: '#26262b', borderRadius: 24 }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value || '')}
          />
        </Popover>
      </Col>
    </Row>
  )
}

export default Search
