import { buttonVariants } from '@mono/ui';
import GlobalFilter, {
  GlobalFilterProps,
} from '../../../../../components/filters/GlobalFilter';
import SubFilters, {
  SubFilter,
} from '../../../../../components/filters/SubFilters';
import { Link } from '../../../../../navigation';
import { PlusCircle } from 'lucide-react';

interface ToolBarProps {
  globalFilter: GlobalFilterProps;
  subFilters: SubFilter[];
}

const ToolBar = ({ globalFilter, subFilters }: ToolBarProps) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        <GlobalFilter {...globalFilter} />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <SubFilters filters={subFilters} />
        <Link
          href="/auctions/new"
          className={buttonVariants({
            className: 'h-8',
          })}
        >
          <PlusCircle className="me-2 h-4 w-4" /> Add Auction
        </Link>
      </div>
    </div>
  );
};

export default ToolBar;
