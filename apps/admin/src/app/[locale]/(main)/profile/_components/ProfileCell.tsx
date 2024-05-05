import { ReactNode, memo } from 'react';

interface ProfileCellProps {
  children: ReactNode;
  title: string;
  description: string;
}

const ProfileCell = ({ children, description, title }: ProfileCellProps) => {
  return (
    <div className="flex flex-wrap border-b border-dashed border-border-base pb-8 py-5">
      <div className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
        <h4 className="text-base font-semibold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default memo(ProfileCell);
