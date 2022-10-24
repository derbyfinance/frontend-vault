import { signOut } from 'next-auth/react';
import Image from 'next/image';

function User({ user }) {
  console.log(user);
  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({ redirect: '/' })}>Sign out</button>
    </div>
  );
}

export default User;
