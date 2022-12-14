import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Col, Layout, Row } from 'antd'
import Header from './header'
import Footer from './footer'
import Home from './home'
import About from './about'
import Project from './project'
import ProjectDetails from './projectDetails'
import SocialFixed from './socialFixed'
import Watcher from './watcher'
import Blogs from './blogs'
import BlogDetails from './blogs/details'
import IonIcon from '@sentre/antd-ionicon'
import RegisterNow from 'components/registerNow'
import AwardNight from './awardNight'

import { useGap } from 'hooks/useUI'
import { getProjects } from 'store/projects.reducer'
import { AppDispatch } from 'store'

import '@solana/wallet-adapter-react-ui/styles.css'
import 'swiper/css/bundle'
import 'static/styles/theme.less'
import './index.less'

const View = () => {
  const dispath = useDispatch<AppDispatch>()
  const gap = useGap()
  const language = useSelector((state: AppState) => state.languages.language)

  useEffect(() => {
    const rootElm = document.getElementById('root')
    if (rootElm) rootElm.setAttribute('class', language)
  }, [language])

  useEffect(() => {
    dispath(getProjects())
  }, [dispath])

  return (
    <Layout style={{ background: 'transparent' }}>
      <Row gutter={[0, 24]} className="codingcamp-container">
        <Col span={24}>
          <Header />
        </Col>
        <Col span={24}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route
              exact
              path="/project/:projectName"
              component={ProjectDetails}
            />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/:blogId" component={BlogDetails} />
            <Route exact path="/award-night" component={AwardNight} />
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Col>
        <Col span={24} style={{ marginTop: gap }}>
          <Footer />
        </Col>
      </Row>
      <SocialFixed />
      <RegisterNow fixed icon={<IonIcon name="receipt" />} />
      <Watcher />
    </Layout>
  )
}

export default View
