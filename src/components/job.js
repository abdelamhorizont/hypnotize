import React, { useState } from 'react'
import { motion, useInView } from "framer-motion"

export default function Job() {
    const [textOpen, settextOpen] = useState(false)

    // const textCollapse =  menuOpen ? 'collapse' : imprintOpen ? 'not-collapsed' : 'collapse'
    const textCollapse = textOpen ? 'not-collapsed' : 'collapse'

    const collapseVariants = {
        open: { maxHeight: "100vh" },
        close: { maxHeight: "0vh" }
    }

    return (
        <div className="job" id='job1'>
            <a onClick={() => {
                settextOpen(!textOpen)
            }}
                href="#job1">
                <h4> Assistant Artist Management (m/w/d) </h4>
            </a>

            <motion.div
                style={{ overflow: 'hidden' }}
                initial={{ maxHeight: 0 }}
                variants={collapseVariants}
                animate={textOpen ? 'open' : 'close'}
                transition={{ duration: 0.5 }}
            >
                <p>
                    *Project manager* (m/f/d):

                    interior design for work phases 3 to 5

                    To take over the project management, we are now looking for a committed project manager: in permanent employment or freelance, full-time for our Berlin office.

                    What's waiting for you:
                    • Architectural and organizational project management
                    • Project and budget responsibility in all work phases
                    • Coordination, integration and control of specialist planners and project participants
                    • Management of the project team

                    What you bring:
                    • Degree in architecture or interior design
                    • At least 7 years of professional experience in all work phases. In focus LPH 3-5
                    • Experience in leading project teams and in supporting clients
                    • Interior planning experience and detailing of high quality furniture installations
                    • High level of design competence and distinctive design standards
                    • Experienced knowledge of Vectorworks, Adobe CS and Sketch up
                    • Very good written and spoken German (minimum B2 level), very good English (our office language is English)

                    What we offer:
                    • Variety of projects and plenty of creative freedom
                    • Relaxed working atmosphere in a warm, creative and multinational team
                    • A modern corporate culture with flat hierarchies and short decision-making paths
                    • Taking on professional responsibility and prospects for personal development
                    • Office in the heart of Berlin with very good public connections

                    We look forward to receiving your application with selected, meaningful work samples (max. 5 MB), CV, salary expectations / daily and monthly rates (for freelancers) and the earliest possible starting date.

                    Application by email to:
                    jobs@supersupply.de
                </p>
            </motion.div>
        </div>
    )
}
