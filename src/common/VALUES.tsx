import { GlobeIcon } from '@/components/system/Icon/Globe';
import { PuzzleIcon } from '@/components/system/Icon/Puzzle';
import { ShieldIcon } from '@/components/system/Icon/Shield';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { Value } from '@/types/Value';

export const values = [
  {
    id: 'integrity',
    icon: <ShieldIcon />,
    title: 'Integridade',
    text: 'Mantenho-me fiel aos meus valores, agindo com honestidade e transparência. Isso ajuda a construir relacionamentos fortes e genuínos.'
  },
  {
    id: 'curiosity',
    icon: <GlobeIcon />,
    title: 'Curiosidade',
    text: 'Minha curiosidade me impulsiona a explorar novas ideias e aprender com desafios. Cada oportunidade é uma chance para descoberta e crescimento.'
  },
  {
    id: 'respect',
    icon: <PuzzleIcon />,
    title: 'Respeito',
    text: 'Valorizo as pessoas ao meu redor e suas perspectivas únicas. Estou aberto a ouvir e aprender, reconhecendo a importância de cada voz.'
  },
  {
    id: 'gratitude',
    icon: <SmileIcon />,
    title: 'Gratidão',
    text: 'Mantenho uma mentalidade de gratidão, apreciando as pequenas coisas da vida. A gratidão me ajuda a permanecer motivado e realizado.'
  }
] satisfies Value[];
