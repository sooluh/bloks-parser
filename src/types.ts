export type ParseType =
  | string
  | number
  | (string | number)[]
  | { [key: string | number]: any };

export type BloksType = {
  isError: boolean;
  isTwoFactor: boolean;
  isAuthenticated: boolean;
  data?: AuthenticatedDataType & TwoFactorDataType;
  message?: string;
};

export type AuthenticatedDataType = {
  login_response?: {
    logged_in_user: {
      has_anonymous_profile_picture: boolean;
      supervision_info: {
        is_eligible_for_supervision: boolean;
        is_supervised_user: boolean;
        is_supervised_or_in_cooldown: boolean;
        has_guardian: boolean;
        is_guardian_user: boolean;
        is_supervised_by_viewer: boolean;
        is_guardian_of_viewer: boolean;
        has_stated_age: boolean;
        screen_time_daily_limit_seconds: null | any;
        screen_time_daily_limit_description: null | any;
        fc_url: string;
        quiet_time_intervals: null | any;
        is_quiet_time_feature_enabled: boolean;
        daily_time_limit_without_extensions_seconds: null | any;
        latest_valid_time_limit_extension_request: null | any;
      };
      is_supervision_features_enabled: boolean;
      liked_clips_count: number;
      fbid_v2: number;
      text_post_app_take_a_break_setting: number;
      interop_messaging_user_fbid: number;
      is_using_unified_inbox_for_direct: boolean;
      biz_user_inbox_state: number;
      show_insights_terms: boolean;
      nametag: {
        mode: number;
        gradient: number;
        emoji_color: number;
        selfie_sticker: number;
        emoji: string;
      };
      allowed_commenter_type:
        | "any"
        | "following"
        | "follower"
        | "following_and_follower"
        | string;
      has_placed_orders: boolean;
      reel_auto_archive: "on" | "off" | string;
      total_igtv_videos: number;
      can_boost_post: boolean;
      can_see_organic_insights: boolean;
      wa_addressable: boolean;
      wa_eligibility: number;
      can_hide_category: boolean;
      can_hide_public_contacts: boolean;
      should_show_category: boolean;
      category_id: number;
      is_category_tappable: boolean;
      should_show_public_contacts: boolean;
      is_business: boolean;
      professional_conversion_suggested_account_type: number;
      account_type: number;
      has_onboarded_to_text_post_app: boolean;
      text_post_app_joiner_number: number;
      pk: number;
      pk_id: string;
      username: string;
      full_name: string;
      is_private: boolean;
      is_verified: boolean;
      profile_pic_url: string;
      is_call_to_action_enabled: boolean;
      category: string;
      account_badges: any[];
      third_party_downloads_enabled: number;
      allow_contacts_sync: boolean;
      phone_number: string;
    };
    session_flush_nonce: null | any;
    status: "ok" | string;
  };
  headers?: {
    "IG-Set-Authorization": string;
    "IG-Set-Password-Encryption-Key-Id": string;
    "IG-Set-Password-Encryption-Pub-Key": string;
    "Access-Control-Expose-Headers": string;
    "IG-Set-X-MID": string;
    "X-IG-Reload-Proxy-Request-Info": string;
    "Cross-Origin-Opener-Policy": string;
    "x-fb-endpoint": string;
    "X-Frame-Options": string;
    "Cache-Control": string;
    Pragma: string;
    Expires: string;
    "Strict-Transport-Security": string;
    "X-Content-Type-Options": string;
    "X-Xss-Protection": string;
    "ig-set-ig-u-ds-user-id": number;
    "ig-set-ig-u-rur": string;
    "Cross-Origin-Embedder-Policy-Report-Only": string;
  };
  cookies?: any;
};

export type TwoFactorDataType = {
  message?: string;
  two_factor_required?: boolean;
  two_factor_info?: {
    pk: number;
    username: string;
    sms_two_factor_on: boolean;
    whatsapp_two_factor_on: boolean;
    totp_two_factor_on: boolean;
    eligible_for_multiple_totp: boolean;
    obfuscated_phone_number: string;
    obfuscated_phone_number_2: string;
    two_factor_identifier: string;
    show_messenger_code_option: boolean;
    show_new_login_screen: boolean;
    show_trusted_device_option: boolean;
    should_opt_in_trusted_device_option: boolean;
    pending_trusted_notification: boolean;
    sms_not_allowed_reason: any;
    trusted_notification_polling_nonce: string;
    is_trusted_device: boolean;
    device_id: string;
    phone_verification_settings: {
      max_sms_count: number;
      resend_sms_delay_sec: number;
      robocall_count_down_time_sec: number;
      robocall_after_max_sms: boolean;
    };
  };
  phone_verification_settings?: {
    max_sms_count: number;
    resend_sms_delay_sec: number;
    robocall_count_down_time_sec: number;
    robocall_after_max_sms: boolean;
  };
  status?: "fail" | string;
  error_type?: "two_factor_required" | string;
};
