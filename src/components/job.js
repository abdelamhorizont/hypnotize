import React, { useState } from 'react'
import { StructuredText } from 'react-datocms';

import { motion, useInView } from "framer-motion"

export default function Job({data}) {
    const [textOpen, settextOpen] = useState(false)

    // const textCollapse =  menuOpen ? 'collapse' : imprintOpen ? 'not-collapsed' : 'collapse'
    const textCollapse = textOpen ? 'not-collapsed' : 'collapse'

    const collapseVariants = {
        open: { maxHeight: "300vh" },
        close: { maxHeight: "0vh" }
    }

    return (
        <div className="job" id='job1'>
            <a onClick={() => {
                settextOpen(!textOpen)
            }}
                href="#job1">
                <h4>{data.titel}</h4>
            </a>

            <motion.div
                style={{ overflow: 'hidden' }}
                initial={{ maxHeight: 0 }}
                variants={collapseVariants}
                animate={textOpen ? 'open' : 'close'}
                transition={{ duration: 0.5 }}
            >
                <p> <StructuredText data={data.text} /> </p>
                <div className="mail"> <a href={'mailto:' + data.eMail}>{data.eMail}</a> </div>
            </motion.div>
        </div>
    )
}
