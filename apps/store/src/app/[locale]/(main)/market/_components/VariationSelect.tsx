import { Button, ButtonProps } from '@mono/ui';
import { cn } from '@mono/util';

const VariationSelect = ({
  color,
  selected,
  quantity,
  props,
}: {
  color: string;
  selected: boolean;
  quantity: number;
  props: ButtonProps;
}) => {
  return (
    <Button
      type="button"
      style={{ backgroundColor: color }}
      className={cn(
        ' relative aspect-square h-10 w-10 rounded-full p-0 active:animate-pulse',
        selected && 'border-foreground border-2 ',
      )}
      {...props}
    >
      {quantity !== 0 && (
        <span className="absolute  left-1/2 top-0 z-10 flex h-4 w-8 items-center  justify-center rounded-xl bg-red-600 text-xs text-white">
          x{quantity}
        </span>
      )}
    </Button>
  );
};

export default VariationSelect;
