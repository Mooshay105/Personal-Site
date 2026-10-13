/**
 * The type for education.
 * @property {number} id - The id of the certificate.
 * @property {string} title - The title of the certificate.
 * @property {string} primaryLink - The URL of the primary link.
 * @property {string} secondaryLink - The URL of the secondary link.
 * @property {string} imageURL - The URL of the image to display.
 * @property {string} description - The description of the certificate.
 * @property {string} date - The date of the certificate.
 */
export type Certificate = {
	id: number;
	title: string;
	primaryLink: string;
	secondaryLink: string;
	imageURL: string;
	description: string;
	hasCert: boolean;
	date: string;
};

/**
 * The type for projects.
 * @property {number} id - The id of the project.
 * @property {string} title - The title of the project.
 * @property {string} primaryLink - The URL of the primary link.
 * @property {string} secondaryLink - The URL of the secondary link.
 * @property {string} imageURL - The URL of the image to display.
 * @property {string} description - The description of the project.
 */
export type Project = {
	id: number;
	title: string;
	primaryLink: string;
	secondaryLink: string;
	imageURL: string;
	description: string;
};
