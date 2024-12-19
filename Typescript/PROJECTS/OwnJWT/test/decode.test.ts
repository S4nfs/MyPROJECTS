import { decode, sign } from '../src';
import 'jest';
describe('decode', () => {
  it('should decode', () => {
    const token = sign({ payload: { name: 'Sagar' }, secret: 'hahahaha' });
    const decoded = decode({ token });
    expect(decoded.name).toBe('Sagar');
  });
});
