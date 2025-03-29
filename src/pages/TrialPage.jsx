import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import RegisterMember from '../components/RegisterMember'
import { API_URL } from '../stor'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { useRecoilState } from 'recoil'
import { popupAtom } from '../utils/popupAtom'


function TrialPage() {
    const [popup, setPopup] = useRecoilState(popupAtom)

    const [header, setHeader] = useState({})
    const [phases, setphases] = useState([])
    const [selection, setselection] = useState([])
    const [mentoring, setmentoring] = useState([])
    const fetchData = async () => {
        const docRef = collection(db, "trailPage")
        const shot = await getDocs(docRef)
        const dat = shot.docs.map((item) => ({ id: item.id, ...item.data() }))
        const headerData = dat.find((item) => item.id == "about_trial_page")
        setHeader(headerData)
        const phaseRef = doc(db, "trailPage", "Phases")
        const phaseShot = await getDoc(phaseRef)
        const orderedPhases = Object.keys(phaseShot.data()).map((key) => ({
            phase: key,
            ...phaseShot.data()[key]
        })).reverse();
        setphases(orderedPhases)

        const selectionData = dat.find((item) => item.id == "selection_Criteria")
        const selectArray = Object.entries(selectionData)
            .filter(([key]) => key !== "id") // Remove "id" key
            .map(([key, value]) => ({ id: key, ...value }));
        setselection(selectArray)
        const mentoringData = dat.find((item) => item.id == "mentoring")
        const mentoringArray = Object.entries(mentoringData)
            .filter(([key]) => key !== "id") // Remove "id" key
            .map(([key, value]) => ({ id: key, ...value }));
        setmentoring(mentoringArray)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <BreadCamp img={header.banner} name={"Trial"} />
            <section className='w-full bg-primary py-20 grid justify-center items-end relative'>
                <div className='grid bg-primary gap-5'>
                    <h4 className='lg:text-5xl text-2xl font-bold text-white'>{header.page_title}</h4>
                    <div className='flex flex-wrap w-fit mx-auto gap-5'>
                        <button onClick={() => setPopup(true)} className='z-10 mx-auto bg-secondary border-secondary text-white duration-300 w-60 py-3 rounded-full drop-shadow-lg hover:bg-primary hover:border-white border '>Register for Trial</button>
                    </div>
                </div>
            </section>
            <div className='lg:px-24 py-14 p-4'>
                <p>Cricket is a game of skill, strategy, and determination, and MJPL Premier League is committed to discovering and nurturing the next generation of cricketing talent. If you are an aspiring cricketer looking for a platform to prove yourself, this is your opportunity to step up and compete at the highest level. <br />
                    <br />

                    All amateur cricketer's who are interested in participating in the trial will need to pay trial registration fee i.e Rs. 1999/- (GST included)<br /> <br />
                    {/* This is the sole fee due prior to the trials. Further Stage: No additional fees will be charged to the players. <br /> <br /> */}
                    Once selected, participants will be notified, via email, regarding all the details of the trial, such as the venue, dates and other instructions for the selection process.  <br />
                    The selection process is designed to identify and nurture the best cricketing talent. It consists of three key phases:</p>
                {phases.map((item, idx) => (

                    <div key={idx}>
                        <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>{item.phase}: {item.title} </h4>
                        <p className='text-gray-600'>
                            {item.description}
                        </p>
                    </div>
                ))}

                <h4 className='text-2xl text-secondary mt-8 text-center font-bold'>Selection Criteria</h4>
                <hr className='border-secondary my-5 w-1/4 mx-auto' />
                <p>The MJPL Premier League selection process is not just about making the cut, it’s an invaluable learning experience for every aspiring cricketer. The process evaluates:
                </p>
                {selection.map((item, idx) =>
                    <p key={idx} className='my-2 leading-tight'>
                        <b>{item.title}</b> – {item.description}
                    </p>

                )}

                <p>Cricketers who pass all three phases will not only earn a place in the league but also receive world-class mentorship to enhance their skills and prepare for professional-level cricket.
                </p>

                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Mentoring for the Trials</h4>
                <p className=''>At MJPL Premier League, we believe that talent needs the right platform and guidance to shine. Our trial camps are designed to provide a fair and structured opportunity for every participant to prove their potential.
                </p>
                <ul className='list-disc grid gap-2 px-10 py-2'>
                    {mentoring.map((item, idx) => (
                        <li key={idx}><b>{item.title}: </b>{item.description}</li>
                    ))}
                </ul>
                <p>At MJPL Premier League, we don’t just select players, we build future cricketing stars. If you have the passion, the drive, and the skill, this is your chance to step onto the field and make your mark.</p>

                <p>Register Now and take the first step toward your cricketing dream!
                </p>
                <div className='flex justify-center mt-4'>
                    <Link to="/trials-rules" className='z-10 text-center px-5 mx-auto text-secondary py-3 w-60 hover:bg-transparent duration-300 border rounded-full drop-shadow-lg bg-white'>Trials Rules</Link>
                </div>
            </div>
            {popup && <RegisterMember setPopup={setPopup} />}
        </main>
    )
}

export default TrialPage