import { z } from "zod";
import { ERROR_MESSAGES, } from "../constants/error-messages";

export const REQUIRED_STRING_SCHEMA = z
  .string({ invalid_type_error: ERROR_MESSAGES.REQUIRED, required_error: ERROR_MESSAGES.REQUIRED })
  .trim()
  .min(1, ERROR_MESSAGES.REQUIRED);