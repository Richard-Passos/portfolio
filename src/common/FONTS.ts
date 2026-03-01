import { Inter, Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

const FONTS = {
  title: Inter({
    subsets: ['latin']
  }),
  display: localFont({
    src: '../../public/fonts/Archivo-Variable.ttf',
    display: 'swap'
  }),
  monospace: Roboto_Slab({
    subsets: ['latin']
  })
};

export { FONTS };
