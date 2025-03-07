import { HttpClient } from "../http";
import { BaseApiService } from "./base-service";
import {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  CompletePassengerProfileRequest,
  CompletePassengerProfileResponse,
  CompleteDriverProfileRequest,
  CompleteDriverProfileResponse,
} from "@repo/types";

/**
 * Driver authentication service
 */
export class DriverAuthService extends BaseApiService {
  constructor(client: HttpClient) {
    super(client);
  }

  async sendOtp(payload: SendOtpRequest) {
    return this.client.post<SendOtpResponse>(
      this.buildUrl("/driver/send-otp"),
      payload,
    );
  }

  async resendOtp(payload: SendOtpRequest) {
    return this.client.post<SendOtpResponse>(
      this.buildUrl("/driver/resend-otp"),
      payload,
    );
  }

  async verifyOtp(payload: VerifyOtpRequest) {
    return this.client.post<VerifyOtpResponse>(
      this.buildUrl("/driver/verify-otp"),
      payload,
    );
  }

  async refreshToken(payload: RefreshTokenRequest) {
    return this.client.post<RefreshTokenResponse>(
      this.buildUrl("/driver/refresh-token"),
      payload,
    );
  }

  async completeProfile(payload: CompleteDriverProfileRequest) {
    return this.client.post<CompleteDriverProfileResponse>(
      this.buildUrl("/driver/complete-profile"),
      payload,
    );
  }
}

/**
 * Passenger authentication service
 */
export class PassengerAuthService extends BaseApiService {
  constructor(client: HttpClient) {
    super(client);
  }

  async sendOtp(payload: SendOtpRequest) {
    return this.client.post<SendOtpResponse>(
      this.buildUrl("/passenger/send-otp"),
      payload,
    );
  }

  async resendOtp(payload: SendOtpRequest) {
    return this.client.post<SendOtpResponse>(
      this.buildUrl("/passenger/resend-otp"),
      payload,
    );
  }

  async verifyOtp(payload: VerifyOtpRequest) {
    return this.client.post<VerifyOtpResponse>(
      this.buildUrl("/passenger/verify-otp"),
      payload,
    );
  }

  async refreshToken(payload: RefreshTokenRequest) {
    return this.client.post<RefreshTokenResponse>(
      this.buildUrl("/passenger/refresh-token"),
      payload,
    );
  }

  async completeProfile(payload: CompletePassengerProfileRequest) {
    return this.client.post<CompletePassengerProfileResponse>(
      this.buildUrl("/passenger/complete-profile"),
      payload,
    );
  }
}
