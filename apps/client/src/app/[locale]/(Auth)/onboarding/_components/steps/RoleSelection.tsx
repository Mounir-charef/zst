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

const Roles: {
  value: 'seller' | 'supplier';
  label: string;
  description: string;
}[] = [
  {
    value: 'seller',
    label: 'Sign up as a Seller',
    description:
      'If you want to offer products or services to other businesses or consumers.',
  },
  {
    value: 'supplier',
    label: 'Sign up as a Supplier',
    description:
      'If you want to offer products or services to other businesses or consumers.',
  },
];

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
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {Roles.map((role) => (
                <FormItem key={role.value} className="space-y-0">
                  <FormLabel
                    className={cn(
                      'text-foreground border-muted hover:border-accent relative flex h-full cursor-pointer flex-col items-start gap-2 rounded-md border-2 p-4',
                      {
                        'border-foreground hover:border-foreground':
                          field.value === role.value,
                      },
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={role.value}
                        className="text-foreground border-foreground absolute end-2 top-2"
                      />
                    </FormControl>
                    <h5 className="font-medium">{role.label}</h5>
                    <p className="text-muted-foreground text-sm">
                      {role.description}
                    </p>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormItem>
        )}
      />
      <div className="pt-2 md:grid md:max-w-xl md:grid-cols-2 md:gap-8">
        <Button
          onClick={validateAndNext}
          type="button"
          size="lg"
          className="w-full md:w-fit"
        >
          Let's Get Started
        </Button>
      </div>
    </Step>
  );
};

export default memo(RoleSelection);
