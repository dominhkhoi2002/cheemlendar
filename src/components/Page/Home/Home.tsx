import React from "react";
import Navbar from "@/components/Navbar";
import "./home.css";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const AboutPage: React.FC<Props> = () => {
    return (
        <div className="page">
            <Navbar activeNav={"home"} />
            <div className="left-panel">
                <h1 className="about-header">Cheemslendar</h1>
                <p className="describe"> Cheemslender is a schedule app for both personal and business activities which can be summarized in a dashboard that can be shared with other users or no time to work together</p>
                <div className="button-ctn"> 
                    <Button type={"primary"} styles={{fontSize: "24px", padding: "24px 48px"}}>
                        <Link href="/signup">Explore</Link>
                    </Button>  
                </div>
               
            </div>
            <div className="right-panel">
            <Image className="Image" src="/Image.png" width={597} height={362} alt="Image" />
            </div>
        </div>
    );
    }
    export default AboutPage;