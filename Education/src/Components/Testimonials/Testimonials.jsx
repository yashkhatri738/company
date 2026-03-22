import React, { useRef } from 'react'
import './Testimonials.css'
import back from '../../assets/back-icon.png'
import next from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


export const Testimonials = () => {

    const slide =useRef()
    let tx = 0;

    const slideForwerd=()=>{
        if(tx>-50){
            tx -=25;
        }
        slide.current.style.transform=`translatex(${tx}%)`
    }

    const slideBackwerd=()=>{
        if(tx<0){
            tx +=25;
        }
        slide.current.style.transform=`translatex(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={next} alt="" className='next-btn' onClick={slideForwerd}/>
            <img src={back} alt="" className='back-btn' onClick={slideBackwerd}/>
            <div className="slider">
                <ul ref={slide}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Yash Khatri</h3>
                                    <span>Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum porro a incidunt optio fugiat cumque perferendis voluptas expedita sapiente, dicta quos nobis cupiditate tempore officiis mollitia libero! Doloribus, delectus.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Yash Khatri</h3>
                                    <span>Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum porro a incidunt optio fugiat cumque perferendis voluptas expedita sapiente, dicta quos nobis cupiditate tempore officiis mollitia libero! Doloribus, delectus.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Yash Khatri</h3>
                                    <span>Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum porro a incidunt optio fugiat cumque perferendis voluptas expedita sapiente, dicta quos nobis cupiditate tempore officiis mollitia libero! Doloribus, delectus.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Yash Khatri</h3>
                                    <span>Delhi</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum porro a incidunt optio fugiat cumque perferendis voluptas expedita sapiente, dicta quos nobis cupiditate tempore officiis mollitia libero! Doloribus, delectus.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

