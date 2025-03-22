import React from 'react'
import BreadCamp from '../components/BreadCamp'
import { API_URL } from '../stor'

export default function TrialRules() {
    return (
        <div>
            {/* <BreadCamp img={API_URL+"other-images/IMG_4955.JPG"} name={"Trials Rules & Regulations"} /> */}
            <h4 className='text-2xl  lg:mx-24 text-white font-bold text-center border-t-8 border-secondary py-3 bg-primary'> Trials Rules & Regulations</h4>

            <section className='lg:p-24 lg:pt-0 p-4'>
               
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>General Rules</h3>
                    <ul className=' mb-8 mt-3 lg:px-8 grid gap-2'>
                        <li className=''>1. Players can register from only one state.</li>
                        <li className=''>2. The registration fee is only for signing up and does not guarantee selection.
                        </li>
                        <li className=''>3. The registration fee is non-refundable and non-transferable under any circumstances.
                        </li>
                        <li className=''>4. Selection is based only on the player's skills shown during trials.
                        </li>
                        <li className=''>5. Players must be between 16 to 45 years old to participate.
                        </li>
                        <li className=''>6. All players must bring their Aadhar Card and two passport-size photographs for verification.
                        </li>
                        <li className=''>7. MacJhons Associates and its members are not involved in the selection process.
                        </li>
                        
                    </ul>
                    <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>Trials & Selection Process</h3>
                    <ul className='lg:px-8 mb-8 mt-3 grid gap-2'>
                        <li>8. After registering, players will receive trial date and venue details via email.
                        </li>
                        <li>9. Trial dates and times cannot be changed if a player misses them. 
                        </li>
                        <li>10. Players must wear any cricket uniform and bring their own cricket kit for the trials.

                        </li>
                        <li>
                        11. Trials will be conducted with a white cricket ball.
                        </li>
                        <li>12. Every player will get a fair chance to showcase their skills.

                        </li>
                        <li>13. The selectors’ decision is final. No requests for re-evaluation will be accepted.
                        </li>
                        <li>14. Selected players will be informed through call, email.
                        </li>
                        <li>15. Any player giving false information will be disqualified.   
                        </li>
                        <li>16. Players who perform well have a chance to get selected for the tournament.
                        </li>
                        <li>17. Selected players will receive training and guidance from expert coaches.
                        </li>
                      
                    </ul>
                    <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>Responsibilities & Important Information</h3>
                    <ul className='lg:px-8 mb-8 mt-3 grid gap-2'>
                        <li>18. Players must pay for their own travel to and from the trial venue.
                        </li>
                        <li>19. The organizers are not responsible for lost or damaged personal belongings.
                        </li>
                        <li>20. The organizers are not responsible for injuries, but first aid will be available at the venue.
                        </li>
                        <li>21. The organizers are not responsible for weather conditions, but necessary precautions will be taken.
                        </li>
                        <li>22. The organizers have the right to allow or deny entry at the venue.
                        </li>
                        
                    </ul>
                    <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>Important Notice</h3>
                    <ul className='lg:px-8 mb-8 mt-3 grid gap-2'>
                        <li>23. MJPL Cricket League is only open to Indian players for the year 2025.
                        </li>
                        <li>24. The tournament in UAE is completely free for selected players in their respective teams.
                        </li>
                        <li>25. For any questions or doorstep registration assistance, call +91 7021612227
                        </li>
                        <li>26. All disputes will be handled in Mumbai courts only.
                        </li>
                        <li>27. By registering, players agree to follow all rules and regulations of MJPL Premier League.
                        </li>
                        
                    </ul>

                
            </section>
        </div>
    )
}
