import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { Dispatch, FormEvent, SetStateAction } from 'react';

interface Props {
  slug: string;
  columns: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new item
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
