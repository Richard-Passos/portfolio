import { TextTitle } from '../ui/text';

const SocialNav = ({ children, ...props }) => {
  return (
    <section {...props}>
      <TextTitle className='mb-4 text-xs uppercase text-muted-content'>
        Socials
      </TextTitle>

      <nav className='grid gap-2'>{children}</nav>
    </section>
  );
};
export default SocialNav;
