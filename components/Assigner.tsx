'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { User } from '@/lib/types';
import { supabase } from '@/lib/supabase';
import { PlusCircle, Trash2 } from 'lucide-react';

const STANDARD_TASKS = [
  'Morning Movement Lead',
  'Kitchen Clean',
  'Bathroom Clean',
  'Symposium Clean',
  'Supply Check',
  'Breakfast Cooking',
  'Dinner Cooking',
  'Procurement & Orders',
  'Laundry (Mixed)',
  'Laundry (Special)',
  'Evening Room Reset'
];

const fetchAssignments = async () => {
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export default function Assigner({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState(users[0]?.id || '');
  const [selectedTask, setSelectedTask] = useState(STANDARD_TASKS[0]);

  // SWR with automatic revalidation
  const { data: assignments = [], error, isLoading, mutate } = useSWR(
    'assignments',
    fetchAssignments,
    {
      refreshInterval: 3000, // Auto-refresh every 3 seconds
      revalidateOnFocus: true, // Refresh when window regains focus
      revalidateOnReconnect: true, // Refresh on network reconnection
    }
  );

  const loading = isLoading;

  const handleAssign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) return;

    const { error } = await supabase.from('assignments').insert([
      {
        user_id: selectedUser,
        activity_id: selectedTask,
      }
    ]);

    if (!error) {
      // Trigger immediate revalidation
      mutate();
    } else {
      console.error(error);
      alert('Make sure you ran the SQL schema in Supabase!');
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from('assignments').delete().eq('id', id);
    // Trigger immediate revalidation
    mutate();
  };

  const getUserName = (id: string) => {
    return users.find(u => u.id === id)?.name || id;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="glass p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-brand-primary">Assign New Task</h3>
        <form onSubmit={handleAssign} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">Resident</label>
            <select 
              value={selectedUser} 
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
            >
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">Rota Task</label>
            <select 
              value={selectedTask} 
              onChange={(e) => setSelectedTask(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
            >
              {STANDARD_TASKS.map(task => (
                <option key={task} value={task}>{task}</option>
              ))}
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-primary text-white rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors font-medium shadow-md hover:shadow-lg cursor-pointer"
          >
            <PlusCircle size={18} />
            Assign Task
          </button>
        </form>
      </div>

      <div className="glass p-6 rounded-xl flex flex-col h-full max-h-[400px]">
        <h3 className="text-xl font-bold mb-4 text-brand-primary">Today's Active Roster</h3>
        <div className="overflow-y-auto flex-1 space-y-3 pr-2">
          {loading ? (
            <p className="text-stone-500 italic text-sm text-center mt-10">Loading assignments...</p>
          ) : assignments.length === 0 ? (
            <p className="text-stone-500 italic text-sm text-center mt-10">No tasks assigned yet.</p>
          ) : (
            assignments.map(a => (
              <div key={a.id} className="bg-white/80 border border-stone-100 rounded-lg p-3 flex justify-between items-center shadow-sm">
                <div>
                  <p className="font-bold text-stone-800 text-sm">{a.activity_id}</p>
                  <p className="text-xs text-brand-primary font-medium mt-0.5">{getUserName(a.user_id)}</p>
                </div>
                <button 
                  onClick={() => handleDelete(a.id)}
                  className="text-stone-300 hover:text-red-500 transition-colors p-2 rounded-md hover:bg-red-50 cursor-pointer"
                  title="Complete or Remove"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
