import decode from './decode';
import { createSignature } from './sign';

interface VerifInput {
  token: string;
  secret: string;
}
const dateInPast = function({ exp }: { exp: number }) {
  const currentDate = new Date();
  return new Date(exp).setHours(0, 0, 0, 0) <= currentDate.setHours(0, 0, 0, 0);
};
function verify({ token, secret }: VerifInput) {
  const parts = token.split('.');

  if (parts.length !== 3) throw new Error('Token is not valid');

  const [encodedHeader, encodedPayload, signature] = parts;
  const candidateSignature = createSignature({
    encodedHeader,
    encodedPayload,
    secret,
  });

  if (signature !== candidateSignature) throw new Error('Token is not valid');
  const decoded = decode({ token });
  const { exp } = decoded;
  if (dateInPast(exp)) {
    throw new Error('Token is expired');
  }

  return decoded;
}
export default verify;
