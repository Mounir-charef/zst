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

const RoleSelection = () => {
  const { control } = useFormContext<OnboardingForm>();
  const { validateAndNext } = useOnboarding();
  return (
    <Step
      title="How would you like to proceed?"
      description="Choose one of the following options to setup your account"
    >
      <FormField
        control={control}
        name="role"
        render={({ field }) => (
          <FormItem className="space-y-1">
            <FormMessage />
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid max-w-xl grid-cols-2 gap-4"
            >
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'seller',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="seller"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Sign up as a Seller</h5>
                  <p className="text-muted-foreground text-sm">
                    If you want to offer products or services to other
                    businesses or consumers.
                  </p>
                </FormLabel>
              </FormItem>
              <FormItem className="space-y-0">
                <FormLabel
                  className={cn(
                    'text-foreground border-muted hover:border-accent relative flex h-full flex-col items-start gap-2 rounded-md border-2 p-4',
                    {
                      'border-foreground hover:border-foreground':
                        field.value === 'supplier',
                    },
                  )}
                >
                  <FormControl>
                    <RadioGroupItem
                      value="supplier"
                      className="text-foreground border-foreground absolute end-2 top-2"
                    />
                  </FormControl>
                  <h5 className="font-medium">Sign up as a Supplier</h5>
                  <p className="text-muted-foreground text-sm">
                    If you want to offer products or services to other
                    businesses or consumers.
                  </p>
                </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormItem>
        )}
      />
      <div className="grid max-w-xl grid-cols-2 gap-8 pt-2">
        <Button onClick={validateAndNext} type="button">
          Let's Get Started
        </Button>
      </div>
    </Step>
  );
};

export default memo(RoleSelection);
