import { ReactNode, memo } from 'react';

interface ProfileCellProps {
  children: ReactNode;
  title: string;
  description: string;
}

const ProfileCell = ({ children, description, title }: ProfileCellProps) => {
  return (
    <div className="border-border-base flex flex-wrap border-b border-dashed py-5 pb-8">
      <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
        <h4 className="mb-2 text-base font-semibold">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default memo(ProfileCell);
