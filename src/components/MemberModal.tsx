import { X } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  category: string;
}

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  members: Member[];
}

export function MemberModal({ isOpen, onClose, members }: MemberModalProps) {
  if (!isOpen) return null;

  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'président':
      case 'president':
        return 'bg-pink-600 text-white';
      case 'vice-président':
      case 'vice-president':
        return 'bg-gray-900 text-white';
      case 'secrétaire':
      case 'secretaire':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-gray-700 text-white';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-pink-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-white">Nos Membres</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member) => (
              <div 
                key={member.id}
                className="bg-gradient-to-br from-pink-50 to-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-2">{member.name}</h3>
                    <div className="space-y-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${getRoleBadgeColor(member.role)}`}>
                        {member.role}
                      </span>
                      <p className="text-gray-600">{member.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
