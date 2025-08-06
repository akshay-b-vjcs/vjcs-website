'use client';

import { useEffect } from 'react';
import 'glightbox/dist/css/glightbox.min.css';

export default function GlightboxProvider() {
	useEffect(() => {
		import('glightbox').then(({ default: GLightbox }) => {
			const lightbox = GLightbox({
				selector: '.glightbox',
			});

			return () => {
				lightbox.destroy();
			};
		});
	}, []);

	return null;
}