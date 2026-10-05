const CLOUDINARY_UPLOAD = '/image/upload/';

/**
 * Adds one delivery transform to Cloudinary images while preserving local and
 * third-party URLs unchanged.
 */
export function cloudinaryImage(url: string, transform: string, quality = 'q_auto'): string {
  if (!url.includes('res.cloudinary.com') || !url.includes(CLOUDINARY_UPLOAD)) {
    return url;
  }

  const [prefix, suffix] = url.split(CLOUDINARY_UPLOAD, 2);
  const source = suffix.replace(/^(?:f_auto,q_auto|q_auto,f_auto)\//, '');

  return `${prefix}${CLOUDINARY_UPLOAD}f_auto,${quality},${transform}/${source}`;
}
