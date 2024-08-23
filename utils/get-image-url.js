const isProd = process.env.NODE_ENV === 'production';

export const getImageUrl = (path) => {
  return isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${path}` : `/static/${path}`;
};
