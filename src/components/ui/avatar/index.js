import AvatarFallback from './Fallback';
import AvatarImage from './Image';
import AvatarRoot from './Root';

const Avatar = AvatarRoot;

Avatar.Fallback = AvatarFallback;
Avatar.Image = AvatarImage;

export default Avatar;
export { AvatarRoot as Avatar, AvatarFallback, AvatarImage };
