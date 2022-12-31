import React from "react";
import { SocialIcon } from "react-social-icons"
import opensea from "../../images/opensea.png"

const Services = () => {
    return (
        <div className="grid sm:grid-cols-4 mt-10 pr-40 pb-5 ">
            <div className="flex justify-end pr-0">
                <a href="https://opensea.io/" target="_blank"><img src={opensea}></img></a>
            </div>
            <div className="flex justify-end pr-0">
                <SocialIcon url="https://twitter.com/MetaShards" target="_blank" />
            </div>
            <div className="flex justify-end pr-0">
                <SocialIcon url="https://www.facebook.com/" target="_blank" />
            </div>
            <div className="flex justify-end pr-0">
                <SocialIcon url="https://www.instagram.com/" target="_blank" />
            </div>

        </div>
    )
}

export default Services;