import { IssueList } from '@issues/components/IssueList';
import { LabelPicker } from '@issues/components/LabelPicker';
import { useIssues } from '@issues/hooks/useIssues';

export const ListView = () => {
  const { issuesQuery } = useIssues();
  const { isLoading, data: issues } = issuesQuery;

  return (
    <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <section className="lg:col-span-8">
        <div className="rounded-2xl border border-base-300 bg-base-200/30 p-4 md:p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold md:text-2xl">Issues activas</h2>
            <p className="text-sm opacity-70">Explora, revisa y entra al detalle de cada issue.</p>
          </div>

          <IssueList values={issues} isLoading={isLoading} />
        </div>
      </section>

      <aside className="lg:col-span-4">
        <div className="rounded-2xl border border-base-300 bg-base-200/30 p-4 md:p-6 lg:sticky lg:top-6">
          <h3 className="mb-3 text-lg font-bold">Filtrar por etiquetas</h3>
          <LabelPicker />
        </div>
      </aside>
    </div>
  );
};
