import React from 'react'
import { BiZoomIn } from 'react-icons/bi'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div className='row m-5 p-5'>
            <div className='col-6 mt-5 p-5 text-center'>
                <h1 className='fs-1 text-primary'style={{fontWeight:'bolder'}}>Project Fair</h1>
                <p className='fs-5'>One Destination for all Software Development Projects.
                Project management involves planning, organizing, and overseeing tasks and resources to achieve specific goals within a set timeframe.</p>
                <Link to={'/login'}>
                <button className='btn btn-primary'>View Dashboard</button>
                </Link>
                </div>

                <div className='col-6'>
                    <img src="https://cdn.pixabay.com/photo/2022/09/27/10/27/brain-7482511_1280.jpg" alt="" style={{height:400, borderRadius:20}} />

            </div>
        </div>

        <div className='p-5 mt-5'>
          <h1 className='text-center text-primary'>Explore Our Projects</h1>
          <div className='row p-5'>
            <div className='col-4'>
                 <ProjectCard/>
            </div>
            <div className='col-4'>
                <ProjectCard/>
            </div>
            <div className='col-4'>
                <ProjectCard/>
          </div>
           <center>
          <Link to={'/projects'}></Link>
          <button className=' mt-5 btn btn-primary w-25'>View Projects</button>
          </center>
          </div>

        </div>
    </div>
  )
}

export default Home