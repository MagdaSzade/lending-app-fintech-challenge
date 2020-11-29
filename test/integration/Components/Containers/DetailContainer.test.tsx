import React from 'react';
import {DetailsContainer} from '../../../../src/Components/Containers/DetailContainer/DetailsContainer';
import {screen, render} from '@testing-library/react';

describe('DetailsContainer', () => {
    it('should render title to uppercas and given component', () => {
        const title = 'tytuł';
        render(
            <DetailsContainer title={title}>
                <div>TEST</div>
            </DetailsContainer>,
        );
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
