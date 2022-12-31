import React from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './'
import AboutUs from "./AboutUs";


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";



const Welcome = () => {

    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-2xl sm:text-5xl text-white text-gradient py-1">
                        <center>Buy our NFTs</center>
                        Now live on OpenSea!
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base m-14">
                        Explore our Amazing collection of Meta Shard NFTs
                    </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        NFTs
                    </button>

                    {/* <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                        </button> */}

                    {/* <div className="grid sm:grid-cols-3 grid-cols-2w-fill mt-10 ">
                            <div className={`rounded-tl-2xl ${commonStyles} font-mono text-3xl` }>
                                Unique
                            </div>
                            <div className={`${commonStyles} font-mono text-3xl`}>
                                3D-Art
                            </div>
                            <div className={`rounded-tr-2xl ${commonStyles} font-mono text-3xl` }>
                                Blockchain
                            </div>
                            <div className={`rounded-bl-2xl ${commonStyles} font-mono text-3xl` }>
                                Etheruem
                            </div>
                            <div className={`${commonStyles} font-mono text-3xl`}>
                                Web 3.0
                            </div>
                            <div className={`rounded-br-2xl ${commonStyles} font-mono text-3xl` }>
                                OpenSea
                            </div>
                        </div> */}
                </div>


            </div>

        </div>




    )
}

export default Welcome;