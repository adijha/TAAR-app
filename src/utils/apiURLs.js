
const BASE_URL = "http://13.59.214.19:8000/api/";
const USER_UPLOAD_URL = "http://13.59.214.19:8010/api/";
const COMPANY_URL = "http://13.59.214.19:8010/api/";
const POST_URL = "http://13.59.214.19:8030/api/";
const CHAT_URL = "http://13.59.214.19:8040/api/";
const CLAN_URL = "http://13.59.214.19:8050/api/";
const WALLET_URL = "http://13.59.214.19:8020/api/wallet/";
const SOCKET_URL = "http://13.59.214.19:3000/";
export default {
  /**
   * Auth API URL
   */
  login: `${BASE_URL}auth/login`,
  logout: `${BASE_URL}auth/logout`,
  register: `${BASE_URL}auth/register`,
  refreshToken: `${BASE_URL}auth/refresh`,
  switchUser: `${BASE_URL}auth/switch`,
  validateField: `${BASE_URL}auth/validate`,
  sendOTP: `${BASE_URL}auth/sendotp`,
  verifyOTP: `${BASE_URL}auth/verifyotp`,
  changePassword: `${BASE_URL}auth/reset`,
}