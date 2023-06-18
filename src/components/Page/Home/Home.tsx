import React from "react";
import Navbar from "@/components/Navbar";
import "./About.css";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const AboutPage: React.FC<Props> = () => {
    return (
        <div className="page">
            <Navbar activeNav={"about"} />
            <div className="left-panel">
                <h1 className="about-header">Cheemslendar</h1>
                <p className="descirbe"> Lorem ipsum dolor sit, amet consectetur</p>   
                <Button type={"primary"} styles={{fontSize: "24px", padding: "24px 48px"}}>
                    <Link href="/signup">Explore</Link>
                    </Button>
            </div>
            <div className="right-panel">
            <Image className="center-logo" src="/logo.jpg" width={96} height={96} alt="Logo" />
            </div>
        </div>
    );
    }
    export default AboutPage;