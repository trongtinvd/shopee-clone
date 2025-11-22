import database from "../mySQL/database.js";
import bcrypt from "bcrypt";
import crypto from "crypto";

export function isvalidSignupRequest(data) {

  return true;
}

export function isValidLogin(data) {
  return true;
}

export function isValidLogoutRequest(data) {
  return true;
}

export function encryptPassword(password) {
  return bcrypt.hash(password, 10);
}

export async function createSessionCode() {
  return crypto.randomBytes(32).toString('hex');
}

export function jsonResponse(status, title, message, data = null, error = null) {
  return { status, title, message, data, error };
}