// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Types for publication frontmatter from src/routes/pubs/*.md
	type Author = MemberAuthor | ExternalAuthor;

	interface MemberAuthor {
		key: string;
		affiliation?: string; // Institution/organization
		equal?: boolean; // Equal contribution indicator
	}

	interface ExternalAuthor {
		name: string; // Direct name if not using key
		url?: string; // Author's personal URL
		affiliation: string; // Institution/organization
		equal?: boolean; // Equal contribution indicator
	}

	interface Video {
		vimeo?: string; // Vimeo video ID (deprecated, use direct YouTube ID)
		youtube?: string; // YouTube video ID (deprecated, use direct string)
	}

	interface Videos {
		figure?: Video | string; // Video for figure
		talk?: Video | string; // Video for talk
		others?: Array<{
			name: string;
			key: string;
		}>;
	}

	interface Material {
		name: string;
		url: string;
		type: 'cube' | 'code' | 'window-maximize' | 'file-archive' | 'registered' | string;
	}

	interface Venue {
		short: string;
		full: string;
		bibtex: {
			type: string;
			venue: string;
		};
		html?: boolean | string;
		paywall?: boolean;
	}

	interface Member {
		name: string;
		url?: string;
		title: string;
		alumni?: boolean;
		next?: string;
	}

	interface Theme {
		key: string;
		name: string;
		desc: string;
		url: string;
		video_url: string;
		people: string[];
	}

	// Publication frontmatter type
	interface PublicationFrontmatter {
		// Required fields
		title: string;
		authors: Author[];
		venue: string; // Key to venues.json
		date: string; // ISO date string
		
		// Optional fields
		doi?: string;
		themes?: string[]; // Array of theme keys
		tags?: string[]; // Array of tag strings
		teaser?: string; // Caption for teaser figure
		abstract?: string; // Paper abstract

		// If preprint
		preprint?: {
			server: 'arxiv'
			id: string
		};
		
		// Display flags
		feature?: boolean; // Featured publication
		award?: string; // Award text (e.g., "Best Paper Award")
		stub?: boolean; // Whether this is a stub (default: true)
		thumb?: boolean; // Whether to show thumbnail (default: true)
		
		// Media
		videos?: Videos;
		
		// Materials
		materials?: Material[];
		
		// Publication type
		type?: 'poster' | 'paper' | 'workshop' | string;
	}

	// Processed publication type (after parsing)
	interface Publication extends Omit<PublicationFrontmatter, 'venue'> {
		slug: string;
		fullTitle: string;
		subtitle: string;
		year: number;
		venueKey: string;
		venue: Venue;
		authors: (Author & Partial<Member>)[];
		video?: string; // Video to show on listing
	}

	interface Seo {
		desc: string;
	}

	// Data files types
	interface VenuesData {
		[key: string]: Venue;
	}

	interface PeopleData {
		[key: string]: Member;
	}

	interface SlugPageData extends Publication {
		seo: Seo
	}
}

export {};