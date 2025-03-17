import React from 'react'
import BreadCamp from '../components/BreadCamp'
import { API_URL } from '../stor'

export default function PrivacyPolicy() {
    return (
        <div>
            {/* <BreadCamp img={API_URL+"other-images/IMG_4843.JPG"} name={"Privacy Policy"} /> */}
            <h4 className='text-2xl lg:mx-24 text-white font-bold text-center border-t-8 border-secondary py-3 bg-primary'>Privacy Policy</h4>

            <section className='lg:px-24 pb-14 p-4'>
                <p className='text-gray-600 text-center'>At MJPL Premier League, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website and participate in our tournaments.
                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>1. Information We Collect</h3>
                <p className='my-3 px-5'>
                    We may collect personal information, including but not limited to: <br />
                    <b>Personal Details:</b> Name, email address, phone number, age, and address. <br />
                    <b>Usage Data:</b> IP address, browser type, pages visited, time and date of visits, and other browsing behavior. <br />
                    <b>Tournament Data:</b> Registration details, performance data, and participation records.

                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>2. How We Use Your Information</h3>
                <p className='my-3 px-5'>
                    Your information may be used for the following purposes: <br />
                    Facilitating tournament registration and participation. <br />
                    Communicating with you regarding updates, announcements, and important tournament-related information. <br />
                    Improving our website, services, and user experience. <br />
                    Ensuring compliance with legal obligations and regulations. <br />

                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>3. Data Sharing and Disclosure</h3>
                <p className='my-3 px-5'>
                    We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances: <br />
                    With service providers who assist us in operating our website and conducting the tournament. <br />
                    With legal authorities when required by law, court order, or legal process. <br />
                    To protect our rights, privacy, safety, or property, and that of other users or participants. <br />

                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>4. Data Security</h3>
                <p className='my-3 px-5'>
                    We implement a variety of security measures to maintain the safety of your personal information, including: <br />
                    Encryption of sensitive data to prevent unauthorized access. <br />
                    Restricted access to personal information, allowing only authorized personnel to handle it. <br />
                    Regular monitoring and security updates to safeguard against cyber threats. <br />
                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>5. Your Rights</h3>
                <p className='my-3 px-5'>
                    You have the right to: <br />
                    Access the personal information we have about you. <br />
                    Correct any inaccuracies in your personal data. <br />
                    Request deletion of your personal information, subject to legal or operational requirements. <br />
                    To exercise any of these rights, please contact us using the details provided below.

                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>6. Changes to This Privacy Policy</h3>
                <p className='my-3 px-5'>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the website and participation in the tournament after changes constitutes acceptance of the new Privacy Policy.
                </p>
                <h3 className='text-lg px-5 font-bold text-white bg-primary border-t-4 border-secondary py-3 mt-5'>7. Contact Information</h3>
                <p className='my-3 px-5'>
                    If you have any questions or concerns about this Privacy Policy, please contact us at: <br /> <br />
                    Email - <b> info@macjhons.com</b> <br />
                    Phone -  <b> +91 7021612227</b> <br />
                    Address - <b>B-3, Sai Ashiyana, Nr Aziziya Masjid, Mira Road (E), Mira Road, Mira Bhayander, Thane, Thane- 401107, Maharashtra, India
                    </b>

                </p>
            </section>
        </div>
    )
}
