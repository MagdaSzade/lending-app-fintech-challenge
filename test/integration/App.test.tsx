import {render, screen} from '@testing-library/react';
import {App} from '../../src/Components/App/App';
import React from 'react';

describe('<App/>', () => {
    test('renders welcome dummy text', () => {
        render(<App />);

        expect(true).toBeTruthy();
    });
});
