import React from 'react'

import './menuItem.styles.css'

import LeftSection from '../leftSection/leftSection.component'
import MidSection from '../midSection/midSection.component'
import RightSection from '../rightSection/rightSection.component'

const MenuItem = () => (
    <div className='menu'>
        {/* <LeftSection />
        <MidSection /> */}
        <RightSection />
    </div>
)

export default MenuItem;