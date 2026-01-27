/**
 * The type for certificates.
 * @property {number} id - The id of the certificate.
 * @property {string} title - The title of the certificate.
 * @property {boolean} isPrimaryLinkActive - Whether the primary link is active or not.
 * @property {boolean} isSecondaryLinkActive - Whether the secondary link is active or not.
 * @property {string} primaryLinkURL - The URL of the primary link.
 * @property {string} secondaryLinkURL - The URL of the secondary link.
 * @property {string} imageURL - The URL of the image to display.
 * @property {string} description - The description of the certificate.
 * @property {string} date - The date of the certificate.
 */
export type Certificate = {
	id: number;
	title: string;
	isPrimaryLinkActive: boolean;
	isSecondaryLinkActive: boolean;
	primaryLinkURL: string;
	secondaryLinkURL: string;
	imageURL: string;
	description: string;
	hasCert: boolean;
	date: string;
};

/**
 * The type for projects.
 * @property {number} id - The id of the project.
 * @property {string} title - The title of the project.
 * @property {boolean} isPrimaryLinkActive - Whether the primary link is active or not.
 * @property {boolean} isSecondaryLinkActive - Whether the secondary link is active or not.
 * @property {string} primaryLinkURL - The URL of the primary link.
 * @property {string} secondaryLinkURL - The URL of the secondary link.
 * @property {string} imageURL - The URL of the image to display.
 * @property {string} description - The description of the project.
 */
export type Project = {
	id: number;
	title: string;
	isPrimaryLinkActive: boolean;
	isSecondaryLinkActive: boolean;
	primaryLinkURL: string;
	secondaryLinkURL: string;
	imageURL: string;
	description: string;
};
