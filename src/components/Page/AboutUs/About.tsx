import React from "react";
import Navbar from "@/components/Navbar";
import "./about.css";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const AboutPage: React.FC<Props> = () => {
    return (
        <div className="page">
            <Navbar activeNav={"about"} />
            <div className="Image-ctn">
                <Image
                    src="/About.png"
                    alt="About Us"
                    width={1920}
                    height={1080}
                />
                </div>
        </div>
    );
    }
    export default AboutPage;