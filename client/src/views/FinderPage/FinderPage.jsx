import React, { Component } from 'react'
import './FinderPage.css'
import { Filter, Posts, MapFinder, Pagination } from '../../components/finderPageComponents/index.js'

export class FinderPage extends Component {
    constructor() {
        super()
        this.state = {
            view: 'list'
        }
    }

    changeView() {
        let { view } = this.state
        if (view === 'list') {
            this.setState({ view: 'map' })
        } else {
            this.setState({ view: 'list'})
        }
    }

    render() {
        const { view } = this.state
        const { isLoggedIn } = this.props
        return (
            <div className='finder'>
                <Filter view={ view } changeView={() => this.changeView()} isLoggedIn={isLoggedIn} />
                <div id='finderView'>
                    {view==='list' && 
                    <React.Fragment>
                        <Posts />
                        <Pagination />
                    </React.Fragment>
                    }
                    {view==='map' && <MapFinder />}
                </div>
            </div>
        )
    }
}

export default FinderPage
