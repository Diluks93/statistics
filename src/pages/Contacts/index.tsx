import * as UI from 'components/ui/Stack';
import { Link } from 'pages/Home/styled';

export const Contacts = () => {
  return (
    <UI.Stack>
      <h1>Contacts</h1>
      <p>
        Development by{' '}
        <Link
          href="https://www.modsen-software.com/front-end/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Modsen
        </Link>
      </p>
    </UI.Stack>
  );
};

export default Contacts;
