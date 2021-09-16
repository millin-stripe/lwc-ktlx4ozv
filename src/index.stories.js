import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import App from "./App.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
export const story = () => createElement("c-app", { is: App });
