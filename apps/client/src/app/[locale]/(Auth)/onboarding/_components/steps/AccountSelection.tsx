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

const AccountSelection = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { validateAndNext, back } = useOnboarding();
  return (
    <Step
      title="Let's get started.Which of these best describes you?"
      description="We'll help guide you to success, whether you're a pro or brand new to sellign."
    >
      <FormField
        control={control}
        name="newAccount"
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
                        field.value === 'new',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="new"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">I'm new to selling online</h5>
                  <p className="text-muted-foreground text-sm">
                    I am starting to supply products online for the first time.
                  </p>
                </FormLabel>
              </FormItem>
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'existing',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="existing"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">I already selling online</h5>
                  <p className="text-muted-foreground text-sm">
                    I have experience selling products through online platforms.
                  </p>
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

export default memo(AccountSelection);
