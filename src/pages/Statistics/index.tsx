import { getRequest } from 'api';
import { ApiRequest } from 'api/model';
import { Chart } from 'components/Chart';
import { Form } from 'components/Form';
import { useCallback, useState } from 'react';

import * as UI from 'components/ui/Stack';

export const Statistics = () => {
  const [response, setResponse] = useState<ApiRequest>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showChart, setShowChart] = useState<boolean>(false);
  const [state, setState] = useState({ owner: '', repo: '' });

  const fetchRequest = useCallback(async (data: typeof state) => {
    setLoading(true);
    try {
      setResponse(await getRequest(data.owner, data.repo));
      setState({ ...data });
      setLoading(false);
      setError('');
    } catch (err) {
      setError('Something went wrong');
      setLoading(false);
      setShowChart(false);
    }
  }, []);

  const handleSubmit = (data: typeof state) => {
    fetchRequest(data);
    setShowChart(true);
  };

  return (
    <>
      <Form initialState={state} onSubmit={handleSubmit} />
      {showChart && !loading && (
        <Chart
          owner={state.owner}
          data={response?.data.map(({ total }) => total)}
        />
      )}
      {error && (
        <UI.Stack>
          <h1>{error}</h1>
        </UI.Stack>
      )}
    </>
  );
};

export default Statistics;
