import { cn } from '@utils/cn';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export type ILoadingProps = ComponentPropsWithoutRef<'span'> & PropsWithChildren;

const Loading = ({ className }: ILoadingProps) => {
  return <span className={cn('loading loading-spinner loading-md text-primary/55', className)}></span>;
};

const LoadingFullPage = () => {
  return (
    <div className="grid h-full w-full place-items-center rounded-3xl border border-base-300/60 bg-base-100/65 shadow-sm backdrop-blur-sm">
      <Loading />
    </div>
  );
};

Loading.FullPage = LoadingFullPage;

export { Loading };
