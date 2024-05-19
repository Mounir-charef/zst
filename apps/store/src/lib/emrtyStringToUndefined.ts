import { z } from 'zod';

export const emptyStringToUndefined = z.literal('').transform(() => undefined);
