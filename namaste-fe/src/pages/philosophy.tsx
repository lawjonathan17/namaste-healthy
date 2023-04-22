import { $Body, $Header, $Text, $Topic } from "./common"

export function Philosophy() {

    const renderEightLimbs = () => {
        return (
            <>

                <$Text>
                    Yoga means to direct and concentrate one's attention on, to use and apply. It means It means the disciplining of the intellect, the mind, the emotions, the will, which that Yoga presupposes; it means a poise of the soul which enables one to look at life in all its aspects evenly.
                </$Text>

                <$Topic>
                    8 Limbs of Yoga (Yoga Sutras of Patanjali)
                </$Topic>

                <$Text>
                Yama - The ethical standards and principles to follow in one's behavior, including non-violence, truthfulness, non-stealing, sexual restraint, and non-greediness.
                <br/>
                Niyama - Personal practices for self-discipline and spiritual development, such as cleanliness, contentment, self-study, self-discipline, and surrender to a higher power.
                <br/>
                Asana - Physical postures practiced to develop physical strength, flexibility, and balance, as well as mental focus and discipline.
                <br/>

                Pranayama - Control of the breath to regulate energy and increase vitality.
                <br/>

                Pratyahara - Withdrawal of the senses from external stimuli to focus inwardly on one's thoughts and emotions.
                <br/>

                Dharana - Concentration and focusing the mind on a single point or object.
                <br/>



                Dhyana - Meditation, or sustained concentration without distraction, leading to a deep state of awareness and insight.
                <br/>

                Samadhi - The highest state of consciousness, in which the individual self merges with the universal consciousness.
                </$Text>
            </>
        )
    }


    return (
        <$Body>
            <$Header>Philosophy</$Header>
            {renderEightLimbs()}
        </$Body>

    )
}