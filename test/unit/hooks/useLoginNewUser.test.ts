import {useLoginNewUser} from '../../../src/hooks/useLoginNewUser';
import {act} from 'react-dom/test-utils';
import {renderHook} from '@testing-library/react-hooks';
import {loginUserFactory} from '../../helpers/factories';

describe('useLoginNewUser', () => {
    it('should do coś', async () => {
        const user = loginUserFactory.build();
    });
});
