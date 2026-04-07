import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = '1d'; // Token expires in 1 day

export const jwttoken={
    sign: (payload)=>{
        try {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        } catch (error) {
            loggers.error('Error generating JWT token:', error);
        }
    },
    verify :(token)=>{
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (error) {
            loggers.error('Error verifying JWT token:', error);
        }
    }
}