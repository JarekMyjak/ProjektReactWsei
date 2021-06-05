import React from 'react'
import LatestPublications from "./LatestPublications/LatestPublications"
import ResumeYourWork from './ResumeYourWork/ResumeYourWork';
import Workspaces from "./Workspaces/Workspaces";


const Home = () => {
    return (
        <div>
            <LatestPublications></LatestPublications>
            <Workspaces></Workspaces>
            <br/>
            <ResumeYourWork></ResumeYourWork>
        </div>
    )
}

export default Home
