import { LightningElement } from 'lwc';
import Stripe from 'stripe';
import {loadStripe} from '@stripe/stripe-js';

const publicstripe = await loadStripe('pk_test_51JIFtIDHKODBpsNtNDdhIXTgo7Crz0roTNBVqhw5PsGISQJWoT78gWZ0kUpt4HxdV4ggBmCCN3dEFdMXwWcyNcZZ00jRHudcOl');

//console.log(publicstripe)
const stripe = Stripe('sk_test_51JIFtIDHKODBpsNt0FCN5jBmVJ5UyJf83rtculsSrZXARLZfEc30jEmzJCUGrm0MygDP4Pf6P1bv0MAfZuFgSYzG00M3lzbREo');

//console.log(stripe)
export default class App extends LightningElement {
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}
