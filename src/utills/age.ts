/**
 * Works out Malcolm's current age in whole years.
 * @returns {number} The number of full years since 28 October 2010.
 */
export function getAge(): number {
	return Math.floor(
		(Date.now() - new Date("2010-10-28").getTime()) / (1000 * 60 * 60 * 24 * 365.25),
	);
}
