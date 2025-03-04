/**
 * @readonly
 * Used to identify cache for queries
 */
export enum CACHE_KEYS {}

/**
 * @readonly
 * Used for debugging purposes during mutations
 */
export enum MUTATION_KEYS {
  SEND_OTP = "send-otp",
  RESEND_OTP = "resend-otp",
  VERIFY_OTP = "verify-otp",
  REFRESH_TOKEN = "refresh-token",

  /**
   * Passenger
   */
  COMPLETE_PASSENGER_PROFILE = "complete-passenger-profile",

  /**
   * Driver
   */
  COMPLETE_DRIVER_PROFILE = "complete-driver-profile",
}
