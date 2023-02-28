import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// 
export const client = createClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID ,
  projectId: 'ydtzhm8z',
  dataset: 'production',
  apiVersion: '2022-11-01',
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:'skF2p87RaVYlwVnpqdQCQupoxjIlqt22yRo8QGm3F1NaHfPsR4Ei9vNv3MuAGhOlVugfU1TlkuH45ZonS0TPlE1JpeVLJqb5ciCj1p8MMrxuAa2gl8DHEGy2a70VBt4H9eXbzq5NsaiX75Xsf0IZuJMILTA6axxTroIivwqu3oK6M3RXStcf',
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);