import {
  Button,
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import { cn } from '@mono/util';
import { Dribbble, Flower2, LucideIcon, Shirt, Tv2 } from 'lucide-react';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { OnboardingForm } from '../../formValidator';
import { useOnboarding } from '../Context';
import Step from '../Step';

const PLANS: {
  value: string;
  desc: string;
  Icon: LucideIcon;
}[] = [
  {
    value: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products,  and personal hygiene products.',
    Icon: Flower2,
  },
  {
    value: 'Consumer Electronics',
    desc: 'martphones, laptops, tablets, cameras, and other electronic',
    Icon: Tv2,
  },
  {
    value: 'Sports & Outdoors',
    desc: 'Equipment and accessories for sports, fitness, camping, hiking, and other outdoor activities.',
    Icon: Dribbble,
  },
  {
    value: 'Apparel & Accessories',
    desc: 'martphones, laptops, tablets, cameras, and other electronic',
    Icon: Shirt,
  },
];

const PlanSelection = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { back } = useOnboarding();
  return (
    <Step
      title="What is your primary business goal?"
      description="Answer as many as you like- you can always change these later. We'll make sure  you're set up to sell in these places"
    >
      <FormField
        control={control}
        name="whatToSell"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <div className="grid grid-cols-2 gap-4">
              {PLANS.map((item) => (
                <FormItem className="space-y-0" key={item.value}>
                  <FormLabel
                    className={cn(
                      'text-foreground border-muted hover:border-accent relative flex h-full justify-start gap-4 rounded-md border-2 p-4',
                      {
                        'border-foreground hover:border-foreground':
                          field.value?.includes(item.value),
                      },
                    )}
                  >
                    <FormControl>
                      <Checkbox
                        className="text-foreground border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background absolute end-2 top-2"
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.value
                              ? field.onChange([...field.value, item.value])
                              : field.onChange([item.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== item.value,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <item.Icon className="size-8" />
                    <div className="space-y-2">
                      <h5 className="font-medium">{item.value}</h5>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </FormLabel>
                </FormItem>
              ))}
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full items-center justify-between gap-4 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value?.includes('Other'),
                    },
                  )}
                >
                  <h5 className="font-medium">Other Physical Products</h5>
                  <FormControl>
                    <Checkbox
                      className="text-foreground border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                      checked={field.value?.includes('Other')}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.value
                            ? field.onChange([...field.value, 'Other'])
                            : field.onChange(['Other'])
                          : field.onChange(
                              field.value?.filter((value) => value !== 'Other'),
                            );
                      }}
                    />
                  </FormControl>
                </FormLabel>
              </FormItem>
            </div>
          </FormItem>
        )}
      />
      <div className="ms-auto flex justify-end gap-4 ps-2 md:w-1/2">
        <Button
          variant="secondary"
          className="flex-1"
          onClick={back}
          type="button"
        >
          Back
        </Button>
        <Button className="flex-1" type="submit">
          Finish
        </Button>
      </div>
    </Step>
  );
};

export default memo(PlanSelection);
