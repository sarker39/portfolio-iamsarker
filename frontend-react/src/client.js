import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8dnsfw5f',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skJyl8Sn5ynqjpqr0pYxB9xSZ2Regtnk7ShRnMxUNhaRBC5servGJnggnjVSxNYYHkedazfcz8npaIdivUzQ2LG4ck0Lz3J2UdXHHsgZXmz3reGCnlkR4jQLDtD5HKp345bOSRVTvEIIUuFW0MrsRTSf4gVAqO681vM07BA1k59N0Sp0yfcT',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);