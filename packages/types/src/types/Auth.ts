export type SendOtpRequest = {
  phone: string;
};

export type SendOtpResponse = {
  message: string;
};

export type VerifyOtpRequest = {
  phone: string;
  otp: string;
};

export type VerifyOtpResponse = {
  message: string;
};

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  message: string;
};

export type CompletePassengerProfileRequest = {
  name: string;
  email: string;
  profilePicture: string;
};

export type CompletePassengerProfileResponse = {
  message: string;
};

export type CompleteDriverProfileRequest = {
  name: string;
  email: string;
  profilePicture: string;
};

export type CompleteDriverProfileResponse = {
  message: string;
};
