import { HttpContextToken } from "@angular/common/http";

export const IS_LOGGING_ENABLED = new HttpContextToken<boolean>(() => false)
export const LOG_MESSAGE = new HttpContextToken<string>(() => "")