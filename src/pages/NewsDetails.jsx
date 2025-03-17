import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import { Link, useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { API_URL } from '../stor'

function NewsDetails() {
    const {name} = useParams()
    const [activeBlog, setActiveBlog] = useState()
    const [otherBlog, setOtherBlog] = useState([])
    const fechBlogData = async()=>{
       try {
        const blogRef = doc(db, "news", name)
        const blog = await getDoc(blogRef)
        setActiveBlog(blog.data())
        await getOtherBlog(blog.data().category)
        console.log(blog.data());
        
       } catch (error) {
        
       }
    }
    const getOtherBlog =async(category)=>{
        const newsQuery = query(collection(db, "news"), where("category", "==", category));
        const short = await getDocs(newsQuery)
        const data = short.docs.map(item=>({id:item.id,...item.data()}))
        setOtherBlog(data)
        console.log(data);
    }
    useEffect(()=>{
        fechBlogData()
    },[])
  return (
    <section>
        <BreadCamp img={API_URL+"other-images/IMG_4722.JPG"} name={"News"}/>
        
        <div className='flex bg-gray-100 gap-4 p-4 lg:px-24 py-14'>
            <div className='h-2/3'>
                <h3 className='uppercase w-fit h-fit bg-yellow-500 text-white px-5 py-1 rounded-full'>{activeBlog?.category}</h3>
                <h2 className='text-4xl font-semibold my-5'>{activeBlog?.title}</h2>
                <div className='overflow-hidden'>
                <img className=' max-w-full' src={activeBlog?.poster} alt="" />
                    <p className=' lg:w-11/12 mt-10'>
                    {activeBlog?.content}
                    </p>
                </div>
            </div>
            <div className='bg-white max-md:hidden h-[104vh] sticky top-20 p-8 w-6/7'>
                <h3 className='text-xl mb-4'>Search</h3>
                <div className='border items-center flex rounded-full outline-none px-4 py-2 w-full'>
                <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
                <input className='outline-none' placeholder='Search...' type="search" />
                </div>
                <h3 className='text-xl my-4'>Recent Posts</h3>
                {
                    
                }
                <div className='lg:flex gap-5 items-center'>
                     <div className='h-fit overflow-hidden'>
                    <img className='h-[100px] w-[150px] max-w-full hover:scale-110 duration-500' src="https://spin.axiomthemes.com/wp-content/uploads/2023/10/post48-copyright-840x840.jpg" alt="" />
                    </div>
                    <div>
            <p className='  my-2 lg:flex gap-2 text-sm items-center'><strong></strong> <div className='h-1 w-1 rounded-full bg-gray-500'></div> <span className='text-gray-500'> Sep 19, 2023</span></p>
                        <Link to='/' className='text-lg hover:text-gray-500 duration-500 font-[500]'>Live cricket score of IND vs PAK, ICC World Cup</Link>
                    </div>
                </div>
                
                <div className='lg:flex gap-5 items-center'>
                     <div className='h-fit overflow-hidden'>
                    <img className='h-[100px] w-[150px] max-w-full hover:scale-110 duration-500' src="https://spin.axiomthemes.com/wp-content/uploads/2023/10/post48-copyright-840x840.jpg" alt="" />
                    </div>
                    <div>
            <p className='  my-2 lg:flex gap-2 text-sm items-center'><strong>TRANDING</strong> <div className='h-1 w-1 rounded-full bg-gray-500'></div> <span className='text-gray-500'> Sep 19, 2023</span></p>
                        <Link to='/' className='text-lg hover:text-gray-500 duration-500 font-[500]'>Live cricket score of IND vs PAK, ICC World Cup</Link>
                    </div>
                </div>
                <img className='p-4 mt-4 bg-gray-200' src="https://spin.axiomthemes.com/wp-content/uploads/2023/10/post48-copyright-840x840.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default NewsDetails