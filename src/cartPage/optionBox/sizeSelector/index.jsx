import React from 'react'

import classes from './index.module.scss'
import { amountConfig } from '../../../config'

function Index({ num }) {
    return (
        <div className={classes.dropDownSection}>

            <div>#{num}</div>

            <div className={classes.sizeDropDown}>
                <select>
                    {amountConfig.sizeList.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

            <div className={classes.colorDropDown}>
                <select>
                    {amountConfig.colorList.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>

        </div>

    )
}

export default Index;
