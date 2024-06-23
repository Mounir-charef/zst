import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from '@mono/ui';
import { cn } from '@mono/util';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { OnboardingForm } from '../../formValidator';
import { useOnboarding } from '../Context';
import Step from '../Step';

const GoalSelection = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { validateAndNext, back } = useOnboarding();
  return (
    <Step
      title="What is your primary business goal?"
      description="Answer as many as you like- you can always change these later. We'll make sure  you're set up to sell in these places"
    >
      <FormField
        control={control}
        name="primaryGoal"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-2 gap-4"
            >
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'Expanding customer base',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="Expanding customer base"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Expanding customer base</h5>
                  <p className="text-muted-foreground text-sm">
                    I aim to reach more customers with my products.
                  </p>
                </FormLabel>
              </FormItem>
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'Increasing sales volume',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="Increasing sales volume"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Increasing sales volume</h5>
                  <p className="text-muted-foreground text-sm">
                    I aim to sell more units of my products.
                  </p>
                </FormLabel>
              </FormItem>

              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'Entering new markets',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="Entering new markets"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Entering new markets</h5>
                  <p className="text-muted-foreground text-sm">
                    I aim to sell my products in new geographical or market
                    segments.
                  </p>
                </FormLabel>
              </FormItem>
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'Improving brand recognition',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="Improving brand recognition"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Improving brand recognition</h5>
                  <p className="text-muted-foreground text-sm">
                    I aim to make my brand more well-known.
                  </p>
                </FormLabel>
              </FormItem>

              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'Other business goals',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="Other business goals"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Other business goals</h5>
                </FormLabel>
              </FormItem>
            </RadioGroup>
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
        <Button onClick={validateAndNext} className="flex-1" type="button">
          Next
        </Button>
      </div>
    </Step>
  );
};

export default memo(GoalSelection);
