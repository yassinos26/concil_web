import { useState } from 'react';
import { Upload, File, X } from 'lucide-react';

export function UploadSection() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Partagez Vos Contenus</h2>
          <p className="text-gray-600">
            Téléchargez des documents, photos ou présentations pour les partager avec la communauté.
          </p>
        </div>

        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
            dragActive 
              ? 'border-pink-500 bg-pink-50' 
              : 'border-gray-300 hover:border-pink-400 bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleChange}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="text-white" size={28} />
            </div>
            <p className="text-gray-700 mb-2">
              Cliquez pour télécharger ou glissez-déposez vos fichiers
            </p>
            <p className="text-gray-500">
              PDF, Images, Documents (max. 10MB)
            </p>
          </label>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-2">
            <p className="text-gray-700">Fichiers sélectionnés:</p>
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-pink-50 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <File className="text-pink-600" size={20} />
                  <span className="text-gray-700">{file.name}</span>
                  <span className="text-gray-500">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow mt-4">
              Télécharger les fichiers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
