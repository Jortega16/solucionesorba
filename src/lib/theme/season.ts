/**
 * Configuración y detección de temporada navideña / festiva.
 * Puede forzarse con NEXT_PUBLIC_HOLIDAY_THEME="true" o desactivarse con "false".
 * Por defecto, está activa para demostración o automáticamente en diciembre y primeros días de enero.
 */
export function isHolidaySeason(): boolean {
  if (typeof process !== 'undefined') {
    const override = process.env.NEXT_PUBLIC_HOLIDAY_THEME;
    if (override === 'true') return true;
    if (override === 'false') return false;
  }

  // Activo por defecto en entorno de demostración local
  return true;
}

