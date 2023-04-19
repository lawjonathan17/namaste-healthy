import { render } from 'react-dom'
import './meditation.css'

// submod
export function Meditation() {

    const renderBoxBreathing = () => {
        return (
            <>
                <div>
                    Breath Work
                </div>

                <div>
                    Box Breathing
                </div>


                <div className="box2">
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                </div>

            </>

        )
    }


    return (
        <>
            <h1>Meditation</h1>
        
            {renderBoxBreathing()}
        </>

        )

}