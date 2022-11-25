import React, { Component } from 'react'
import './ProgressBar.style'

export default class ProgressBar extends Component {

    render() {
        const currentStep = this.props.currentStep;
        const steps = this.props.steps;
        const stepKeys = Object.keys(steps);

        return (
        <div className='ProgressBar'>
            {
            stepKeys.map((curr, index) => {
                const isFirstOrLast = index === 0 || index === stepKeys.length - 1;

                return <>
                <div block="ProgressBar" elem={`${isFirstOrLast ? "Line" : "InnerLine"}`}>
                    <div block="ProgressBar" elem={`${isFirstOrLast ? "Line" : "InnerLine"}`} 
                    mods={ { isFilling: curr === currentStep, isActive: stepKeys.indexOf(currentStep) > index } }>
                    </div>
                </div>
                
                {index != stepKeys.length - 1 &&
                <div className="CircleContainer">
                    <div block= "CircleContainer" elem= "Circle" 
                    mix= {{ block: "CircleContainer", elem: "Circle", 
                    mods: { isFading: curr === currentStep, isChecked: index < stepKeys.indexOf(currentStep) }}}>
                        <p>
                            {index < stepKeys.indexOf(currentStep) ? "✓" : index + 1}
                        </p>
                    </div>
                    <p className={ index > stepKeys.indexOf(currentStep) ? 'floating-text-disabled' : 'floating-text'}>
                        { steps[stepKeys[index]].title }
                    </p>
                </div>
            }
                </>
            })
            }
        </div>
        )
    }
}
