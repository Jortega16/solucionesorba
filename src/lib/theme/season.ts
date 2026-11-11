/**
 * Configuración y calendario automático para el tema de Navidad / Fin de Año.
 *
 * Rango configurado: Del 15 de noviembre al 31 de diciembre.
 *
 * Funcionamiento automático:
 * - Se activa solo cada año el 15 de noviembre a las 00:00.
 * - Se desactiva solo el 1 de enero a las 00:00 (finalizado el 31 de diciembre).
 * - No requiere intervención manual, deploys ni reiniciar servidores.
 *
 * Control manual mediante variable de entorno (opcional):
 * - NEXT_PUBLIC_HOLIDAY_THEME="true"  -> Fuerza el encendido en cualquier fecha (pruebas / demo).
 * - NEXT_PUBLIC_HOLIDAY_THEME="false" -> Fuerza el apagado en cualquier fecha.
 * - NEXT_PUBLIC_HOLIDAY_THEME="auto"  -> (por defecto si no se especifica) Sigue estrictamente el calendario.
 */

export const HOLIDAY_SCHEDULE = {
  // Fecha de inicio: 15 de noviembre (mes 11, día 15)
  startMonth: 11,
  startDay: 15,

  // Fecha de fin: 31 de diciembre (mes 12, día 31)
  endMonth: 12,
  endDay: 31,
} as const;

export function isHolidaySeason(date: Date = new Date()): boolean {
  // 1. Verificar override manual por variable de entorno
  if (typeof process !== 'undefined') {
    const override = process.env.NEXT_PUBLIC_HOLIDAY_THEME;
    if (override === 'true') return true;
    if (override === 'false') return false;
  }

  // 2. Comprobación automática por calendario (15 de nov al 31 de dic)
  const month = date.getMonth() + 1; // 1 = Enero, 11 = Noviembre, 12 = Diciembre
  const day = date.getDate();

  // Noviembre: activo a partir del 15
  if (month === HOLIDAY_SCHEDULE.startMonth && day >= HOLIDAY_SCHEDULE.startDay) {
    return true;
  }

  // Diciembre: activo todo el mes hasta el 31
  if (month === HOLIDAY_SCHEDULE.endMonth && day <= HOLIDAY_SCHEDULE.endDay) {
    return true;
  }

  // Enero a octubre (y del 1 al 14 de noviembre) queda apagado
  return false;
}
