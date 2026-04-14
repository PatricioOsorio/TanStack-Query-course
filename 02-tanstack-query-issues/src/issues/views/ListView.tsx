import { IssueList } from '@issues/components/IssueList';
import { LabelPicker } from '@issues/components/LabelPicker';
import { useIssues } from '@issues/hooks/useIssues';

export const ListView = () => {
  const { issuesQuery } = useIssues();
  const { isLoading, data: issues } = issuesQuery;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">
      <section className="surface-panel surface-panel-glow soft-rise">
        <div className="mb-6 flex flex-col gap-3 border-b border-base-300/60 pb-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="section-kicker">Exploración activa</p>
            <h2 className="section-title">Issues activas</h2>
            <p className="max-w-2xl text-sm leading-6 text-base-content/62 md:text-base md:leading-7">
              Explora, revisa y entra al detalle de cada issue.
            </p>
          </div>

          <span className="badge badge-outline border-primary/20 bg-primary/5 px-3 py-3 text-xs uppercase tracking-[0.22em] text-primary/70">
            Actualizado en vivo
          </span>
        </div>

        <IssueList values={issues} isLoading={isLoading} />
      </section>

      <aside className="surface-panel surface-panel-glow lg:sticky lg:top-6 soft-rise [animation-delay:80ms]">
        <div className="mb-5 space-y-2 border-b border-base-300/60 pb-4">
          <p className="section-kicker">Segmentación</p>
          <h3 className="text-xl font-bold tracking-tight">Filtrar por etiquetas</h3>
          <p className="text-sm leading-6 text-base-content/62">Ordena la exploración por temas relevantes.</p>
        </div>

        <div className="space-y-4">
          <LabelPicker />
        </div>
      </aside>
    </div>
  );
};
