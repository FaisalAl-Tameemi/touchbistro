import React from 'react'
import './PrimeMedianInput.css'
import { InputNumber, Button, Spin, Row, Col } from 'antd'
import { getPrimesMedian } from '../../util/primeslist.util'
import { waitPromise } from '../../util/api.util'

class PrimeMedianInput extends React.Component {
    constructor (props) {
        super(props)

        // default state
        this.state = {
            isLoading: false,
            inputValue: null,
            showResults: false,
            results: null,
            error: null,
        }
    }

    _generatePrimeMedianResultsMessage = (primesMedian, limit) => {
        return `The median for the list of prime numbers less than n=${limit} is ${JSON.stringify(primesMedian)}`
    }

    _handleInputChange = (newValue) => {
        this.setState({
            inputValue: newValue,
        })
    }

    _handleSearch = async () => {
        this.setState({
            isLoading: true,
        })

        // a delay for UX purposes, the response is too fast
        // needs to be throttled to be able to show the loading
        await waitPromise(500)

        try {
            const primesMedian = await getPrimesMedian(this.state.inputValue)

            this.setState({
                isLoading: false,
                error: null,
                results: this._generatePrimeMedianResultsMessage(primesMedian, this.state.inputValue),
            })
        }
        catch (err) {
            this.setState({
                isLoading: false,
                results: null,
                error: err.message,
            })
        }
    }

    render () {
        return (
            <div>
                <Row gutter={20}>
                    <Col span={20}>
                        <InputNumber 
                            value={this.state.inputValue} 
                            min={2} 
                            onChange={this._handleInputChange} 
                            style={{width: '100%'}}
                            disabled={this.state.isLoading}
                        />
                    </Col>
                    <Col span={4}>
                        { !this.state.isLoading && 
                            <Button 
                                type="primary" 
                                shape="circle" 
                                icon="search"
                                onClick={this._handleSearch} 
                            /> 
                        }
                        { this.state.isLoading && <Spin /> }
                    </Col>
                </Row>
                { this.state.results && <small>{ this.state.results }</small> }
                { this.state.error && <small>{ this.state.error }</small> }
            </div>
        )
    }
}

export default PrimeMedianInput