import { twMerge } from 'tailwind-merge';

const Email = ({ className, ...props }) => {
  return (
    <svg
      className={twMerge('h-8 w-8 fill-current', className)}
      data-svg='Email'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M18 5H6a2.652 2.652 0 0 0-3 3v9a2.652 2.652 0 0 0 3 3h12a2.652 2.652 0 0 0 3-3V8a2.652 2.652 0 0 0-3-3Zm-.059 4.606-4.912 3.573a1.748 1.748 0 0 1-2.058 0L6.059 9.606a.749.749 0 1 1 .882-1.212l4.913 3.572a.248.248 0 0 0 .292 0l4.913-3.572a.749.749 0 0 1 .882 1.212Z'></path>
    </svg>
  );
};

export default Email;
