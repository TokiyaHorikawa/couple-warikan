import { parseISO, format } from 'date-fns';

type Args = {
  dateString: string;
};
export default function Date({ dateString }: Args): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
