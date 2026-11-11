/**
 * Configuración y calendario automático para el tema de Navidad / Fin de Año.
 *
 * Funcionamiento automático:
 * - Se activa solo cada año del 1 de diciembre al 6 de enero (Día de Reyes).
 * - El 7 de enero a las 00:00 se apaga automáticamente sin necesidad de tocar código.
 * - El 1 de diciembre siguiente vuelve a encenderse por sí mismo.
 *
 * Control manual mediante variable de entorno (opcional):
 * - NEXT_PUBLIC_HOLIDAY_THEME="true"  -> Fuerza el encendido en cualquier época (pruebas / demo).
 * - NEXT_PUBLIC_HOLIDAY_THEME="false" -> Fuerza el apagado en cualquier época.
 * - NEXT_PUBLIC_HOLIDAY_THEME="auto"  -> (por defecto si no se especifica) Sigue las fechas del calendario.
 */

export const HOLIDAY_SCHEDULE = {
  // Fecha de inicio: 1 de diciembre (mes 12, día 1)
  startMonth: 12,
  startDay: 1,

  // Fecha de fin: 6 de enero (mes 1, día 6)
  endMonth: 1,
  endDay: 6,
} as const;

export function isHolidaySeason(date: Date = new Date()): boolean {
  // 1. Verificar override manual por variable de entorno
  if (typeof process !== 'undefined') {
    const override = process.env.NEXT_PUBLIC_HOLIDAY_THEME;
    if (override === 'true') return true;
    if (override === 'false') return false;
  }

  // 2. Comprobación automática por calendario
  const month = date.getMonth() + 1; // 1 = Enero, 12 = Diciembre
  const day = date.getDate();

  // Todo diciembre a partir del día de inicio (ej. 1 de diciembre en adelante)
  if (month === HOLIDAY_SCHEDULE.startMonth && day >= HOLIDAY_SCHEDULE.startDay) {
    return true;
  }

  // Enero hasta el día de fin (ej. hasta el 6 de enero)
  if (month === HOLIDAY_SCHEDULE.endMonth && day <= HOLIDAY_SCHEDULE.endDay) {
    return true;
  }

  return false;
}
