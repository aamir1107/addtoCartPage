import React from 'react'
import classes from './index.module.scss'
import { amountConfig } from '../../config'
import SizeSelector from './sizeSelector'


function OptionBox({ data, idx, isSelected, onActiveChange }) {

    return (
        <div className={`${classes.optionSection}${isSelected ? ` ${classes.selectedOption}` : ""}`}>

            <div className={classes.rightSection}>
                <input type="radio" checked={isSelected} onClick={() => onActiveChange(idx)} />
            </div>

            <div className={classes.middleSection}>

                <div className={classes.quantitySectiom}>
                    {data.quantity} Pair
                </div>

                <div className={classes.currencySection}>
                    {data.currency} {data.totalAmount}
                </div>

            </div>


            <div className={classes.leftSection}>
                <div className={classes.isPopularDeal}>
                    {data.isPopular ?
                        `Most Popular`
                        : null}
                </div>
                <div className={classes.discountSection}>
                    {data.discount}
                </div>
            </div>

            {isSelected ? <>

                <div className={classes.optionSections}>

                    <div className={classes.HeadingSection}>

                        <div className={classes.sizeText}>
                            size
                        </div>

                        <div className={classes.colorText}>
                            color
                        </div>

                    </div>
                    {
                        Array(data.quantity).fill(0).map((_data, indx) => {
                            return (<SizeSelector num={indx + 1} />)
                        })
                    }

                </div>


            </> : null}

        </div>
    )
}

export default OptionBox;