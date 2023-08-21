import React from 'react';
import { BiSolidEdit } from "react-icons/bi";

const About = () => {
    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <div className="card card-compact max-w-96 bg-base-100 shadow-xl border border-blue-200 py-7" >
                    <div className='flex justify-end mr-5'>
                        <BiSolidEdit className='text-2xl text-blue-300 hover:text-blue-500' />
                    </div>
                    <div className="avatar flex justify-center">
                        <div className="w-40 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
                            <img src='https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-beard-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127123.jpg' />
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Erhan</h2>
                        <h4 className='text-base'><span className='font-bold'>Email:</span> nabiursiddique01@gmail.com</h4>
                        {/* {
                            user.emailVerified ?
                                <h4 className='text-base'><span className='font-bold'>Email verified: </span>Yes</h4>
                                :
                                <h4 className='text-base'><span className='font-bold'>Email verified: </span>No</h4>

                        } */}
                        <h4 className='text-base'><span className='font-bold'>Role: </span>Student</h4>
                        <h4 className='text-base'><span className='font-bold'>University: </span>RIMT University</h4>
                        <h4 className='text-base'><span className='font-bold'>Address: </span>Par Naogaon, Naogaon</h4>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-info w-full mt-4">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;