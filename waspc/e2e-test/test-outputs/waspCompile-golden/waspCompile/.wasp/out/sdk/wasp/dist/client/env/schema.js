import * as z from 'zod';
// PRIVATE API (sdk, Vite config)
export const clientEnvSchema = z.object({
    REACT_APP_API_URL: z
        .string()
        .url({
        message: 'REACT_APP_API_URL must be a valid URL',
    })
        .default('http://localhost:3001'),
});
//# sourceMappingURL=schema.js.map