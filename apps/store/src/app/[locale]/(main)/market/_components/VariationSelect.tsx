import { Button, ButtonProps } from '@mono/ui';
import { cn } from '@mono/util';

const VariationSelect = ({
  color,
  selected,
  props,
}: {
  color: string;
  selected: boolean;
  props: ButtonProps;
}) => {
  return (
    <Button
      style={{ backgroundColor: color }}
      className={cn(
        ' aspect-square h-10 w-10 rounded-full p-0 active:animate-pulse',
        selected && 'border-foreground border-2 ',
      )}
      {...props}
    ></Button>
  );
};

export default VariationSelect;
