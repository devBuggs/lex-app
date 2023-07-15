
import MultiStep from 'react-multistep';


const MultiStepForm = () => {

    return (
        <>
            Transfee Form
            <hr />
            <MultiStep showNavigation={true}>
                <StepOne title='StepOne'/>
                <StepTwo title='StepTwo'/>
                <StepThree title='StepThree'/>
                <StepFour title='StepFour'/>
                <StepFour title='StepFive'/>
            </MultiStep>
        </>
    )
}

export default MultiStepForm;


const StepOne = ({ title }) => {
    return (
        <>
            <h3>First Form {title}</h3>
        </>
    )
}

const StepTwo = () => {
    return (
        <>
            <h3>Second Form</h3>
        </>
    )
}

const StepThree = () => {
    return (
        <>
            <h3>Third Form</h3>
        </>
    )
}

const StepFour = () => {
    return (
        <>
            <h3>Fourth Form</h3>
        </>
    )
}

const StepFive = () => {
    return (
        <>
            <h3>Five Form</h3>
        </>
    )
}
