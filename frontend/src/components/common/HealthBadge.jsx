import { useState, useEffect } from 'react';
import { Activity, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { getHealthStatus } from '../../services/api';

/**
 * HealthBadge Component
 * Verifies backend connectivity for Phase 1 verification
 */
export default function HealthBadge() {
  const [status, setStatus] = useState('checking'); // 'checking' | 'healthy' | 'error'
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const checkHealth = async () => {
    setStatus('checking');
    try {
      const res = await getHealthStatus();
      setData(res);
      if (res.status === 'success' || res.status === 'ok') {
        setStatus('healthy');
      } else {
        setStatus('error');
        setErrorMsg('Unexpected response structure');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to reach API server');
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-zinc-800/80 text-xs font-mono">
      <div className="flex items-center gap-2">
        {status === 'checking' && (
          <>
            <RefreshCw className="w-3.5 h-3.5 text-amber-500 animate-spin" />
            <span className="text-zinc-400">Verifying API Health...</span>
          </>
        )}

        {status === 'healthy' && (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">Backend Online</span>
          </>
        )}

        {status === 'error' && (
          <>
            <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
            <span className="text-rose-400">Backend Unreachable</span>
          </>
        )}
      </div>

      <button
        onClick={checkHealth}
        className="ml-2 text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded hover:bg-zinc-800/50"
        title="Retry connection"
      >
        <RefreshCw className="w-3 h-3" />
      </button>
    </div>
  );
}
