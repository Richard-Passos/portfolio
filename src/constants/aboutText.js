import personalInfo from './personalInfo';

const aboutText = `Hey — I'm ${
  personalInfo.name.first
} an awesome ${personalInfo.job.toLowerCase()} based in ${
  personalInfo.location.country
}. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games.`;

export default aboutText