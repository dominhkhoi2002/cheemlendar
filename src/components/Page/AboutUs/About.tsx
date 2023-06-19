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
            <div className="left-panel">
                <h2 className="about-header">Nhom HI_31</h2>
                <p className="describe">“Kết nối và truyền cảm hứng - Chúng tôi là nền tảng tạo ra sự khác biệt” </p>
            </div>
            <line className="seperate-line" ></line>
            <div className="right-panel">
            <div className="5 dots">
                <ellipse className="dot1"></ellipse>
                <ellipse className="dot2"></ellipse>
                <ellipse className="dot3"></ellipse>
                <ellipse className="dot4"></ellipse>
                <ellipse className="dot5"></ellipse>
            </div>
            </div>

        </div>
    );
    }
    export default AboutPage;