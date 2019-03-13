// Test away
 import React from 'react';
 import { render } from 'react-testing-library';
 import Dashboard from './Dashboard.js';

 describe('<Describe />', () => {
     it('should render without crashing', () => {
         render(<Dashboard/>)
     })
 })