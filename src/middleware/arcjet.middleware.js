// Arcjet protection removed — middleware is now a no-op to keep compatibility with any leftover imports
export const arcjetProtection = (_req, _res, next) => next();
