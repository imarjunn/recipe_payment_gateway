import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from '../../axios';

class Checkout extends Component{

    state = {
        checkoutData : []
    }
    
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('/recipe')
             .then(response => {
                 //console.log(response.data[id]);
                 this.setState({checkoutData: response.data[id]});
             })
        
    }

    render(){
        //console.log(this.state.checkoutData.name);
        return (
            <div className="container">
                <div className="row py-3 g-3 ml-1">
                    <Link className="btn btn-primary" to="/">
                        back to Home
                    </Link>
                </div>
                <div className="py-5 text-center">
                     <h2>Checkout form</h2>
                </div>
                <div className="row g-3">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3" >
                        <span className="text-muted">Your cart</span>
                        <span className="badge bg-secondary rounded-pill">1</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{this.state.checkoutData.name}</h6>
                                </div>
                                <span className="text-muted">{this.state.checkoutData.price}</span>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                            <div class="col-sm-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                            </div>

                            <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                            </div>

                            <div class="col-12">
                            <label for="username" class="form-label">Username</label>
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input type="text" class="form-control" id="username" placeholder="Username" required />
                            <div class="invalid-feedback">
                                Your username is required.
                                </div>
                            </div>
                            </div>

                            <div class="col-12">
                            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                            </div>

                            <div class="col-12">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                            </div>

                            <div class="col-md-3">
                            <label for="zip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required />
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                            </div>
                        </div>

                        <hr class="my-4" />

                        <h4 class="mb-3">Payment</h4>

                        <div class="my-3">
                            <div class="form-check">
                                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                <label class="form-check-label" for="credit">Credit card</label>
                            </div>
                            <div class="form-check">
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                <label class="form-check-label" for="debit">Debit card</label>
                            </div>
                            <div class="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                <label class="form-check-label" for="paypal">PayPal</label>
                            </div>
                        </div>

                        <div class="row gy-3">
                            <div class="col-md-6">
                                <label for="cc-name" class="form-label">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="cc-number" class="form-label">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                <div class="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-expiration" class="form-label">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                <div class="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-cvv" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                <div class="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr class="my-4" />

                        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(Checkout);