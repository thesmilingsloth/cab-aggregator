import { useMutation } from "@tanstack/react-query";
import {
  CompleteDriverProfileRequest,
  CompletePassengerProfileRequest,
  RefreshTokenRequest,
  SendOtpRequest,
  VerifyOtpRequest,
} from "@repo/types";

import { DriverAuthService, PassengerAuthService } from "../api/auth-service";
import { MUTATION_KEYS } from "../constants/enum";

function AuthHooks<T extends DriverAuthService | PassengerAuthService>(
  authService: T,
) {
  /**
   * Send OTP for login
   */
  function useSentOtp() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.SEND_OTP],
      mutationFn: (payload: SendOtpRequest) => {
        return authService.sendOtp(payload);
      },
    });
  }

  /**
   * Resend OTP for login
   */
  function useResendOtp() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.RESEND_OTP],
      mutationFn: (payload: SendOtpRequest) => {
        return authService.resendOtp(payload);
      },
    });
  }

  /**
   * Verify OTP for login
   */
  function useVerifyOtp() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.VERIFY_OTP],
      mutationFn: (payload: VerifyOtpRequest) => {
        return authService.verifyOtp(payload);
      },
    });
  }

  /**
   * Refresh token
   */
  function useRefreshToken() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.REFRESH_TOKEN],
      mutationFn: (payload: RefreshTokenRequest) => {
        return authService.refreshToken(payload);
      },
    });
  }

  return {
    useSentOtp,
    useResendOtp,
    useVerifyOtp,
    useRefreshToken,
  };
}

export function PassengerAuthHooks(passengerService: PassengerAuthService) {
  const authHooks = AuthHooks<PassengerAuthService>(passengerService);

  function useCompleteProfile() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.COMPLETE_PASSENGER_PROFILE],
      mutationFn: (payload: CompletePassengerProfileRequest) => {
        return passengerService.completeProfile(payload);
      },
    });
  }

  return {
    ...authHooks,
    useCompleteProfile,
  };
}

export function DriverAuthHooks(driverService: DriverAuthService) {
  const authHooks = AuthHooks<DriverAuthService>(driverService);

  function useCompleteProfile() {
    return useMutation({
      mutationKey: [MUTATION_KEYS.COMPLETE_DRIVER_PROFILE],
      mutationFn: (payload: CompleteDriverProfileRequest) => {
        return driverService.completeProfile(payload);
      },
    });
  }

  return {
    ...authHooks,
    useCompleteProfile,
  };
}
