import { Resend } from "resend";
import { ENV } from "./env.js";

let resendClient = null;
if (ENV.RESEND_API_KEY) {
  try {
    resendClient = new Resend(ENV.RESEND_API_KEY);
  } catch (err) {
    console.error("Failed to initialize Resend client:", err.message);
    resendClient = null;
  }
} else {
  console.warn("RESEND_API_KEY not set - email sending disabled");
}

export { resendClient };

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};
