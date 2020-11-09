import React, { Component } from 'react'
import './Pagination.css'

export class Pagination extends Component {
    render() {
        return (
            <nav>
                <ul className='pageNums'>
                    <li className='pageNum'>
                        <a className='' href=''>
                            &laquo;
                        </a>
                    </li>
                    <li className='pageNum'><a href=''>1</a></li>
                    <li className='pageNum'><a href=''>2</a></li>
                    <li className='pageNum'><a href=''>3</a></li>
                    <li className='pageNum'>
                        <a href=''>
                            &raquo;
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination
