import React from "react";
import "../Styles/Home.css";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import { FaUnity, FaAppStoreIos, FaAndroid, FaAws, FaLinux, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiGoland, SiMysql, SiJenkins, SiCsharp, SiGnubash } from 'react-icons/si';
import { CgCPlusPlus} from 'react-icons/cg';

function Home() {
    return (
        <div className="home">
            <div className="about">
                <Avatar alt="yin75620" src="https://avatars.githubusercontent.com/u/10918371?v=4" className={"large"} />
                <h2> Welcome to Jeff Yin profolio</h2>
                <div className="prompt">
                    <p>A software developer with a passion for game.</p>
                    <EmailIcon onClick={() => window.location = 'mailto:yin75620@hotmail.com'}>Contact Me</EmailIcon>
                    <GithubIcon onClick={() => window.open('https://github.com/yin75620', '_blank')}>Github</GithubIcon>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            <FaUnity /> Unity,  <FaAppStoreIos /> iOS,  <FaAndroid /> Android
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            <FaAws /> AWS service, <FaDocker /> Docker, <SiMysql/> MySql,  <SiJenkins /> Jenkins
                        </span>
                    </li>
                    <li className="item">
                        <h2>Language</h2>
                        <span> 
                            <SiCsharp /> C#, <CgCPlusPlus /> C/C++, <SiGoland /> Golang,  <FaGitAlt /> Git,  <SiGnubash /> bash shell, <FaLinux/> Linux
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
