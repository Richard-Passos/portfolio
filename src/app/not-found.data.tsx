import { NotFoundData } from '@/app/not-found';
import { MagneticButton } from '@/components/input/Button/Magnetic';
import { ArrowUpRightIcon } from '@/components/system/Icon/ArrowUpRight';

export default {
  hero: {
    status: 'Erro 404',
    title: 'Desculpe, esta página não foi encontrada!',
    text: 'Vamos levar você de volta para um lugar familiar.',
    action: {
      url: '/',
      label: (
        <>
          Página Inicial <ArrowUpRightIcon />
        </>
      )
    }
  }
} satisfies NotFoundData;
