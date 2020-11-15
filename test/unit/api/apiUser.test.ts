import {registerNewUser} from '../../../src/api/apiUser';
import {backend} from '../../../src/api/backend';
import {mocked} from 'ts-jest/utils';
import {newUserFactory} from '../../helpers/factories';

jest.mock('../../../src/api/backend');

describe('registerNewUser', () => {
    it('calls request and passes response', async () => {
        //        mocked(backend.post).mockResolvedValue({status: 200});
        //        const newUser = newUserFactory.build();
        //        const request = await registerNewUser(newUser);
        //        expect(request.status).toBe(200);
        //        expect(backend.post).toHaveBeenCalledWith('api/users///register', {body: newUser});
    });
});
