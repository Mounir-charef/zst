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

const Items: {
  value: 'new' | 'existing';
  label: string;
  description: string;
}[] = [
  {
    value: 'new',
    label: "I'm new to selling online",
    description: 'I am starting to supply products online for the first time.',
  },
  {
    value: 'existing',
    label: 'I already selling online',
    description: 'I have experience selling products through online platforms.',
  },
];

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
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {Items.map((item) => (
                <FormItem key={item.value} className="space-y-0">
                  <FormLabel
                    className={cn(
                      'text-foreground border-muted hover:border-accent relative flex h-full cursor-pointer flex-col items-start gap-2 rounded-md border-2 p-4',
                      {
                        'border-foreground hover:border-foreground':
                          field.value === item.value,
                      },
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={item.value}
                        className="text-foreground border-foreground absolute end-2 top-2"
                      />
                    </FormControl>
                    <h5 className="font-medium">{item.label}</h5>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormItem>
        )}
      />
      <div className="ms-auto flex w-full justify-end gap-4 md:w-1/2 md:ps-2">
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
