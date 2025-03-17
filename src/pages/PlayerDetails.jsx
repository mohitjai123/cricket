import React from 'react'
import BreadCamp from '../components/BreadCamp'
import { useParams } from 'react-router-dom'
import { API_URL } from '../stor'

function PlayerDetails() {
    const { name } = useParams()
    return (
        <section>
            <BreadCamp img={API_URL+"other-images/IMG_4783.JPG"} name="Teams" second={name.split("-").join(" ")} />
            <div className='p-4 flex flex-wrap gap-12 items-center justify-center bg-gray-200 lg:px-24 py-14'>
                <div className='border border-white'>
                    <img className='h-96' src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="" />
                    <div className='bg-white/50 border border-white py-2 text-center'>
                        <h4 className=' w-fit mx-auto px-5 py-2 text-3xl font-bold'>MS Thoni</h4>

                        <h4 className='text-center text-gray-500 mx-auto px-5 py-2 text-xl font-semibold'>Indian</h4>
                    </div>
                </div>
                <div className=''>
                    <h4 className='mx-auto py-2 text-3xl my-4 font-semibold'>Player Review</h4>
                    <div className='grid grid-cols-2 border'>
                        <div className='border p-8 border-primary'>
                            <h4 className='text-2xl text-center font-semibold'>2008</h4>
                            <h5 className='text-center'>Debut Year</h5>
                        </div>
                        <div className='border p-8 border-primary'>
                            <h4 className='text-2xl break-words text-center font-semibold'>Wicketkeeper</h4>
                            <h5 className='text-center'>Specialization</h5>
                        </div>
                        <div className='border p-8 border-primary'>
                            <h4 className='text-2xl text-center font-semibold'>07 July 1981</h4>
                            <h5 className='text-center'>Date of Birth</h5>
                        </div>
                        <div className='border p-8 border-primary'>
                            <h4 className='text-2xl text-center font-semibold'>264</h4>
                            <h5 className='text-center'>Matches</h5>
                        </div>


                    </div>
                </div>
            </div>

            <div className='lg:px-24 px-4'>
                <h4 className='mx-auto py-2 text-3xl my-4 font-semibold'>About</h4>
                <p className='text-gray-500'>MS Dhoni added another feather to his cap in 2021 edition of the league as CSK won their fourth title. Ahead of the 2022 edition of the league, MS Dhoni was one of the four retained players by the franchise and he was retained for a sum of INR 12 crore. A batting powerhouse, MS Dhoni possesses the ability to destroy different bowling attacks on his own. The calmness and composure in his demeanor along with a sharp cricketing brain accounts for a lethal combination on the cricketing field and the glistening silverware in the trophy cabinets at CSK are a testimony to his extraordinary leadership skills. He was the face of Chennai Super Kings for the first eight editions of the league, leading them to two titles (2010 & 2011) and four runner-up finishes. He then became the first player to be drafted by Rising Pune Supergiant in the ninth edition of the league. And, he once again became the first player to be retained by CSK ahead of the IPL Player Auction 2018. The 2018 season of the league had a fairytale ending with another glistening silverware added to the trophy cabinet of the Chennai Super Kings. The 2019 edition of the league too saw the CSK reach the finals of the tournament under MS Dhoni’s leadership. While MS Dhoni has hung up his boots on a 16-year illustrious career for Team India, he was seen donning the CSK colours once again in 2020.</p>
            </div>
            <BattingTable/>
            <BowlingTable/>
        </section>
    )
}


const BattingTable = ()=>{
    return <section className='overflow-auto lg:px-24 p-4'>
                <h4 className='mx-auto py-2 text-3xl my-4 font-semibold'>Batting & Fielding Stats</h4>
                <table className='w-full rounded-lg overflow-hidden border-collapse'>
                    <thead>
                       <tr>
                       <th className='bg-primary text-white'>YEAR</th>
                        <th className='bg-primary text-white'>MAT</th>
                        <th className='bg-primary text-white'>NO</th>
                        <th className='bg-secondary text-white'>RUNS</th>
                        <th className='bg-primary text-white'>HS</th>
                        <th className='bg-primary text-white'>AVG</th>
                        <th className='bg-primary text-white'>BF</th>
                        <th className='bg-primary text-white'>SR</th>
                        <th className='bg-primary text-white'>100</th>
                        <th className='bg-primary text-white'>50</th>
                        <th className='bg-primary text-white'>4S</th>
                        <th className='bg-primary text-white'>6S</th>
                        <th className='bg-primary text-white'>CT</th>
                        <th className='bg-primary text-white'>ST</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr className='border'>
                        <td className='py-3 text-center'>Career</td>
                        <td className='py-3 text-center'>264</td>
                        <td className='py-3 text-center'>95</td>
                        <td className='py-3 bg-gray-200 text-center'>5243</td>
                        <td className='py-3 text-center'>84</td>
                        <td className='py-3 text-center'>39.13</td>
                        <td className='py-3 text-center'>3812</td>
                        <td className='py-3 text-center'>136.5</td>
                        <td className='py-3 text-center'>0</td>
                        <td className='py-3 text-center'>24</td>
                        <td className='py-3 text-center'>364</td>
                        <td className='py-3 text-center'>262</td>
                        <td className='py-3 text-center'>152</td>
                        <td className='py-3 text-center'>42</td>
                        </tr>
                        {Array(10).fill(0).map((_, idx)=>
                            <tr key={idx} className='border'>
                            <td className='py-3 text-center'>{2024-idx}</td>
                            <td className='py-3 text-center'>264</td>
                            <td className='py-3 text-center'>95</td>
                            <td className='py-3 bg-gray-200 text-center'>5243</td>
                            <td className='py-3 text-center'>84</td>
                            <td className='py-3 text-center'>39.13</td>
                            <td className='py-3 text-center'>3812</td>
                            <td className='py-3 text-center'>136.5</td>
                            <td className='py-3 text-center'>0</td>
                            <td className='py-3 text-center'>24</td>
                            <td className='py-3 text-center'>364</td>
                            <td className='py-3 text-center'>262</td>
                            <td className='py-3 text-center'>152</td>
                            <td className='py-3 text-center'>42</td>
                            </tr>
                        )}
                      
                    </tbody>
                </table>
    </section>
}

const BowlingTable = ()=>{
    return <section className='overflow-auto lg:px-24 p-4'>
                <h4 className='mx-auto py-2 text-3xl my-4 font-semibold'>Bowling</h4>
                <table className='w-full rounded-lg overflow-hidden border-collapse'>
                    <thead>
                       <tr>
                       <th className='bg-primary text-white'>YEAR</th>
                        <th className='bg-primary text-white'>MAT</th>
                        <th className='bg-primary text-white'>BALLS</th>
                        <th className='bg-primary text-white'>RUNS</th>
                        <th className='bg-secondary text-white'>WKTS</th>
                        <th className='bg-primary text-white'>BBM</th>
                        <th className='bg-primary text-white'>AVG</th>
                        <th className='bg-primary text-white'>ECON</th>
                        <th className='bg-primary text-white'>SR</th>
                        <th className='bg-primary text-white'>4W</th>
                        <th className='bg-primary text-white'>5W</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr className='border'>
                        <td className='py-3 text-center'>Career</td>
                        <td className='py-3 text-center'>20</td>
                        <td className='py-3 text-center'>412</td>
                        <td className='py-3 text-center'>592</td>
                        <td className='py-3 bg-gray-200 text-center'>34</td>
                        <td className='py-3 text-center'>4/28</td>
                        <td className='py-3 text-center'>136.5</td>
                        <td className='py-3 text-center'>24.5</td>
                        <td className='py-3 text-center'>52.5</td>
                        <td className='py-3 text-center'>1</td>
                        <td className='py-3 text-center'>0</td>
                        </tr>
                        {Array(10).fill(0).map((_, idx)=>
                           <tr className='border'>
                           <td className='py-3 text-center'>{2024-idx}</td>
                           <td className='py-3 text-center'>20</td>
                           <td className='py-3 text-center'>412</td>
                           <td className='py-3 text-center'>592</td>
                           <td className='py-3 bg-gray-200 text-center'>34</td>
                           <td className='py-3 text-center'>4/28</td>
                           <td className='py-3 text-center'>136.5</td>
                           <td className='py-3 text-center'>24.5</td>
                           <td className='py-3 text-center'>52.5</td>
                           <td className='py-3 text-center'>1</td>
                           <td className='py-3 text-center'>0</td>
                           </tr>
                                                )}
                      
                    </tbody>
                </table>
    </section>
}

export default PlayerDetails