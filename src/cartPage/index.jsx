import React, { useState } from 'react'
import classes from './index.module.scss'
import { amountConfig } from '../config'
import OptionBox from './optionBox'




function Index() {

    const [selectedOption, setSelectedOption] = useState(null)



    return (
        <div className={classes.addToCartPage}>

            <div className={classes.cartElementContainer}>

                <div className={classes.CartheadingSection}>

                    <div className={classes.line}>
                    </div>

                    <div className={classes.heading}>
                        Bundle & Save
                    </div>

                    <div className={classes.line}>
                    </div>

                </div>

                <div className={classes.cardListContainer} >
                    {amountConfig.data.map((data, idx) => (<OptionBox
                        onActiveChange={setSelectedOption}
                        isSelected={idx === selectedOption}
                        idx={idx}
                        key={data.totalAmount}
                        data={data} />))}
                </div>


                <div className={classes.lowerSection}>

                    <div className={classes.delivereyTime}>
                        Free Two Days Shipping
                    </div>

                    <div className={classes.totalAmountSection}>
                        TOTAL: {selectedOption != null ? amountConfig.data[selectedOption].totalAmount : null}
                    </div>

                </div>

                <div className={classes.addToCartOption}>
                    <button> + ADD TO CART </button>
                </div>

            </div>

        </div>
    )
}

export default Index
