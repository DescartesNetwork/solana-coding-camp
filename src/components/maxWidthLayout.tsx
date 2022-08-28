import React, { CSSProperties, ReactNode } from 'react'

import { Col, Row, RowProps } from 'antd'

const DEFAULT_MAXWIDTH = 1200

type MaxWidthLayoutProps = {
  gutter?: RowProps['gutter']
  maxWidth?: number
  colStyle?: CSSProperties
  children?: ReactNode
  style?: CSSProperties
  className?: string
}
const MaxWidthLayout = ({
  gutter,
  maxWidth = DEFAULT_MAXWIDTH,
  colStyle,
  children,
  style,
  className = '',
}: MaxWidthLayoutProps) => {
  return (
    <Row
      gutter={gutter}
      justify="center"
      style={{ ...style }}
      className={className}
    >
      <Col span={24} style={{ maxWidth, ...colStyle }}>
        {children}
      </Col>
    </Row>
  )
}

export default MaxWidthLayout
