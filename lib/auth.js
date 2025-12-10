// lib/auth.js
import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in environment variables");
}

const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function signJwt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyJwt(token) {
  const { payload } = await jwtVerify(token, secretKey);
  return payload;
}
