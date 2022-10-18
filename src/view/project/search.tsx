import { Col, Input, Row } from 'antd'

const Search = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Input placeholder="Search" />
      </Col>
    </Row>
  )
}

export default Search
