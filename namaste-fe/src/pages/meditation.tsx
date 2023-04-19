import { render } from 'react-dom'
import './meditation.css'

// submod
export function Meditation() {

    const renderBoxBreathing = () => {
        return (
            <>
                <div id="box">
                    <div id="lineTop"></div>
                    <div id="lineBottom"></div>
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