import { Outlet } from 'react-router-dom';

export const GitApp = () => {
  return (
    <div className="app-shell soft-fade-in">
      <header className="surface-panel surface-panel-glow mb-6 md:mb-8 soft-rise">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="badge badge-outline border-primary/20 bg-primary/5 gap-2 px-3 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-primary/70">
              GitHub issues
            </span>

            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tight text-base-content md:text-6xl">Git Issues</h1>
              <p className="max-w-2xl text-sm leading-6 text-base-content/62 md:text-base md:leading-7">
                Seguimiento de problemas con una lectura más clara, silenciosa y profesional.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline border-primary/20 bg-primary/5 px-3 py-3 text-primary/70">TanStack Query</span>
            <span className="badge badge-outline px-3 py-3 text-base-content/65">DaisyUI</span>
            <span className="badge badge-outline px-3 py-3 text-base-content/65">Prefetch</span>
          </div>
        </div>
      </header>

      <main className="space-y-6">
        <Outlet />
      </main>
    </div>
  );
};
