import Sections from './sections';
import { pagesApi } from '@/api';
import { capitalize } from '@/utils';

const AboutView = async () => {
  const {sections = []} = (await pagesApi.getOne('about')).data || {}

  let lastTheme = ''

  return sections.map(({slug = '', ...data}) => {
    let Section = Sections[slug.split(/[-_]/g).map(capitalize).join('')]

    Section =  Section && (
      <Section hasTransition={slug !== 'hero' && lastTheme !== data.theme} {...data}/>
    )

    lastTheme = data.theme

    return Section
  })
};

export default AboutView;
