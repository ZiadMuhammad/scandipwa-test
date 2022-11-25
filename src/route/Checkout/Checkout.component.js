import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'SourceComponent/ContentWrapper'

import ProgressBar from 'Src/ProgressBar/ProgressBar.component';
import './Checkout.override.style.scss'

class Checkout extends SourceCheckout {
    renderProgressBar() {
        return <ProgressBar currentStep={ this.props.checkoutStep } steps={ this.stepMap }/>
    }
    
    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                    wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                    label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;