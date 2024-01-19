import { sign, verify } from '../src';
import 'jest';

describe('verify', () => {
  it('verify the decoded token', () => {
    const secret = 'hahahaha';
    const token = sign({ payload: { name: 'Sagar' }, secret });
    const verified = verify({ token, secret });
    expect(verified.name).toBe('Sagar');
  });
  it('should through if signature is valid', () => {
    const secretOne = 'hahahaha';
    const secretTwo = 'hahahahaha';
    const token = sign({ payload: { name: 'Sagar' }, secret: secretOne });
    try {
      verify({ token, secret: secretTwo });
    } catch (error) {
      expect(error.message).toBe('Token is not valid');
    }
  });
  it('should throw if token has expired', () => {
    const secret = 'hahahaha';
    const token = sign({
      payload: { name: 'Sagar' },
      secret,
      options: { expiresIn: -8.64e7 },
    });
    try {
      verify({ token, secret });
    } catch (error) {
      expect(error.message).toBe('Token is expired');
    }
  });
});
