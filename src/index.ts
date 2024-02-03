import { User } from '../src/classes/User';

async function main() {
  const user = await User.getUserData();
  console.log('User:', user);
}

main();
