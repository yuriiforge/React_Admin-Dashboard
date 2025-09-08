import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

interface Props {
  slug: string;
  columns: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 111,
          img: '',
          lastName: 'Hello',
          firstName: 'Test',
          email: 'testme@gmail.com',
          phone: '123 456 789',
          createdAt: '01.02.2023',
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${slug}s`] });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutation.mutate();
    setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div key={column.field} className="item">
                <label>{column.headerName}</label>
                <input
                  type={column.type ?? 'text'}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
