import React, { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, [])

    return (
        <section id="work" ref={sectionRef} className='app-showcase'>
            <div className='w-full'>

                {/* Row 1 */}
                <div className='showcaselayout'>

                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/postGirl.png" alt="Post-girl" />
                        </div>

                        <div className='text-content'>
                            <h2>Post-girl — AI Powered API Testing & Collaboration Platform</h2>

                            <p className='text-white-50 md:text-xl'>
                                A full-stack API testing platform inspired by Postman that enables developers to test REST APIs and WebSocket connections in real time. Built with Next.js, React, Prisma, and PostgreSQL, it features AI-powered JSON generation, OAuth authentication, request collections, team workspaces, and execution history.
                            </p>
                        </div>
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>

                        <div className='project' ref={project2Ref}>
                            <div>
                                <img src="/images/realtime-chat-app.png" alt="Chat Application" />
                            </div>

                            <h2>Real-Time Chat Application</h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div >
                                <img src="/images/Trello.png" alt="Trello App" />
                            </div>

                            <h2>Trello Style Task Manager</h2>
                        </div>

                    </div>
                </div>

                {/* Row 2 */}
                <div className='showcaselayout mt-10'>
                    <div className='project-list-wrapper overflow-hidden'>

                        <div className='project' ref={project2Ref}>
                            <div>
                                <img src="/images/digital-hippo-home.png" alt="Digital Hippo" />
                            </div>

                            <h2>Digital Hippo Marketplace</h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div>
                                <img src="/images/TheLiveNews.png" alt="Live News" />
                            </div>

                            <h2>Live News Application</h2>
                        </div>

                    </div>

                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/uber.png" alt="Uber Clone"  />
                        </div>

                        <div className='text-content'>
                            <h2>Uber Clone — Real-Time Ride Hailing Platform</h2>

                            <p className='text-white-50 md:text-xl'>
                                A production-ready MERN ride-hailing application featuring live ride matching, real-time GPS tracking, Socket.IO communication, Google Maps integration, OTP ride verification, and secure payments through Stripe and Cash. Built to deliver a seamless experience for both Riders and Captains.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className='showcaselayout mt-10'>

                    

                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/Course.png" alt="Course Management System" />
                        </div>

                        <div className='text-content'>
                            <h2>Course Management System — Modern Learning Platform</h2>

                            <p className='text-white-50 md:text-xl'>
                                A responsive learning management system that helps students manage courses, monitor learning progress, and access personalized dashboards. Built with React, Redux, and Firebase, it includes Google Authentication, progress tracking, and a seamless user experience across all devices.
                            </p>
                        </div>

                        
                    </div>

                    <div className='project-list-wrapper overflow-hidden'>

                        <div className='project' ref={project2Ref}>
                            <div>
                                <img src="/images/stock.png" alt="Stock Management" />
                            </div>

                            <h2>Stock Management System</h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div >
                                <img src="/images/3D.png" alt="3D iPhone Showcase" />
                            </div>

                            <h2>3D Interactive iPhone Showcase</h2>
                        </div>

                    </div>

                </div>
                {/* Row 4 */}
                <div className='showcaselayout mt-10'>
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/threejs-projects.png" alt="Course Management System" />
                        </div>

                        <div className='text-content'>
                            <h2>Course Management System — Modern Learning Platform</h2>

                            <p className='text-white-50 md:text-xl'>
                                A responsive learning management system that helps students manage courses, monitor learning progress, and access personalized dashboards. Built with React, Redux, and Firebase, it includes Google Authentication, progress tracking, and a seamless user experience across all devices.
                            </p>
                        </div>

                        
                    </div>

                    

                </div>

            </div>
        </section>
    )
}

export default ShowCaseSection