import { sign } from '../src';
import 'jest';

describe('sign', () => {
  it('should produce different signatures for different payloads', () => {
    const secret = 'hahaha';
    const jwtOne = sign({
      payload: {
        name: 'Sagar Verma',
      },
      secret,
      options: {
        expiresIn: 8.64e7,
      },
    }).split('.')[2];
    const jwtTwo = sign({
      payload: {
        name: 'Sagar Verma',
      },
      secret: `${secret}-354`,
      options: {
        expiresIn: 8.46e7,
      },
    }).split('.')[2];

    expect(jwtOne).not.toBe(jwtTwo);
  });

  it('should add the expiry to the payload', () => {
    const secret = 'hahaha';

    const jwtOne = sign({
      payload: { name: 'Sagar Verma' },
      secret: secret,
      options: {
        expiresIn: 8.64e7,
      },
    }).split('.')[1];
    expect(typeof JSON.parse(atob(jwtOne)).exp).toBe('number');
  });
});
