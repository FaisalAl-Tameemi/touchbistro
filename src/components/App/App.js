import React from 'react'
import PrimeMedianInput from '../PrimeMedianInput/PrimeMedianInput'
import { Row, Col, Layout } from 'antd'
import './App.css'


function App() {
  return (
    <Layout>
      <Layout.Header>
        <img src={'/touchbistro.logo.png'} className="logo" alt="logo" />
      </Layout.Header>
      <Layout.Content className="content">
        <Row className="content-row" type={'flex'} justify={'center'} align={'middle'}>
          <Col md={{ span: 10 }} sm={{ span: 24 }}>
            <p>
              <strong>Description:</strong><br />
              This app generates a list of prime numbers upto a specified limit.
              The median of that list is then calculated and displayed.
            </p>
            <h5>
              Enter a number below to get started
            </h5>
            <PrimeMedianInput />
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer>

      </Layout.Footer>
    </Layout>
  )
}

export default App
