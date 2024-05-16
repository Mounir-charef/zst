'use client';
import { useRouter } from '../navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@mono/ui';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => router.back()}
      size="icon"
      className="h-7 w-7"
      disabled={!window.history?.length && window.history.length <= 1}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Back to previous page</span>
    </Button>
  );
}
