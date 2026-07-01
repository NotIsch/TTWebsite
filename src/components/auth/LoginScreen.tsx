import { useAuth } from '../../contexts/AuthContext';
import { School, LogIn } from 'lucide-react';

export function LoginScreen() {
  const { login } = useAuth();

  const handleMicrosoftLogin = () => {
    login({
      name: "Demo Teacher",
      email: "teacher@kings-school.org.uk",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="glass rounded-2xl p-8 md:p-12 w-full max-w-md relative">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-navy-900 font-bold text-2xl mx-auto mb-6 shadow-lg shadow-gold-500/20">
            KS
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">King's School</h1>
          <p className="text-white/50 text-sm">Tech Team Portal</p>
        </div>

        <div className="flex items-center gap-2 justify-center mb-8">
          <School size={16} className="text-gold-400" />
          <span className="text-xs text-white/40">Staff &amp; Tech Team Access</span>
        </div>

        <button
          onClick={handleMicrosoftLogin}
          className="w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            border: '1px solid rgba(255,255,255,0.15)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
          }}
        >
          <LogIn size={20} />
          Sign in with Microsoft
        </button>

        <p className="text-xs text-white/30 text-center mt-6">
          Sign in with your school Microsoft 365 account
        </p>
      </div>
    </div>
  );
}
