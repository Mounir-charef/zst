import { DataTable } from '@mono/ui';
import { promises as fs } from 'fs';
import { Metadata } from 'next';
import path from 'path';
import { z } from 'zod';
import { columns } from './_components/Columns';
import { taskSchema } from './_data/schema';
import { filterOptions } from './filters';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
};

// Simulate a fetch from an API
async function getTasks() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(main)/examples/table/_data/tasks.json',
    ),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div className="space-y-16">
      <DataTable
        header={{
          title: 'Tasks',
          description: 'Manage your tasks and issues.',
        }}
        data={tasks}
        columns={columns}
        searchOptions={{
          column: 'title',
          placeholder: 'Search tasks',
        }}
        filterOptions={filterOptions}
      />

      <DataTable
        header={{
          title: 'Tasks',
          description: 'Manage your tasks and issues.',
        }}
        data={tasks}
        columns={columns}
        searchOptions={{
          column: 'title',
          placeholder: 'Search tasks',
        }}
        filterOptions={filterOptions}
        variant="items-table"
      />
    </div>
  );
}
