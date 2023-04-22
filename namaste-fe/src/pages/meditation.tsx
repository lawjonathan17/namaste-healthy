import { render } from 'react-dom'

import './meditation.css'

import { $Body, $Description, $Header, $Text, $Topic } from "./common"


// submod
export function Meditation() {

    const renderBoxBreathing = () => {
        return (
            <>
                <$Topic>
                    Pranayama
                </$Topic>

                <$Text>
                    Prana means breath, respiration, life, vitality, wind, energy or strength. 
                    Ayama means length, expansion, stretching or restraint.
                    Pranayama is the practice of controlling one's breath to enhance the flow of prana within the body.
                    <br/> <br/>
                    The aim of these practices is to increase awareness of the breath and regulate the flow of energy within the body,
                    resulting in a more calm and focused mind, as well as physical benefits such as improved lung function and reduced stress levels.
                </$Text>

                <br/>
                <br/>

                <$Description>
                    Box Breathing <i>(sama vritti pranayama)</i>
                </$Description>


                <div>
                    <ul>
                        <li>Lowers stress</li>
                    </ul>
                </div>

                <div className="box-wrapper">
                    <div className="box-inhale box-text">Inhale</div>
                    <div className="inhale-hold box-text">Hold</div>
                    <div className="box-exhale box-text">Exhale</div>
                    <div className="exhale-hold box-text">Hold</div>
                    <div className="box">
                        <span className="top"></span>
                        <span className="right"></span>
                        <span className="bottom"></span>
                        <span className="left"></span>
                    </div>
                </div>
            </>

        )
    }


    return (
        <>
            <$Body>
                <$Header>Meditation</$Header>

                {renderBoxBreathing()}
            </$Body>

        </>

        )

}