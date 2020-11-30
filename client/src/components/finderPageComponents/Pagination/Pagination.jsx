import React, { Component } from 'react'
import './Pagination.css'

export class Pagination extends Component {
    render() {
        return (
            <nav>
                <ul className='pageNums'>
                    <li className='pageNum'>
                        <a className='' href='/finder'>
                            &laquo;
                        </a>
                    </li>
                    <li className='pageNum'><a href='/finder'>1</a></li>
                    <li className='pageNum'><a href='/finder'>2</a></li>
                    <li className='pageNum'><a href='/finder'>3</a></li>
                    <li className='pageNum'>
                        <a href='/finder'>
                            &raquo;
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination
