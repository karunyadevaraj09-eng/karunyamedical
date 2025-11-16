import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { MedicalInfoCard } from './components/MedicalInfoCard';
import { Disclaimer } from './components/Disclaimer';
import { medicalConditions, MedicalCondition } from './data/medicalData';
import { Activity } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<MedicalCondition[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    const filtered = medicalConditions.filter(
      (condition) =>
        condition.name.toLowerCase().includes(query) ||
        condition.description.toLowerCase().includes(query) ||
        condition.commonTreatments.toLowerCase().includes(query)
    );

    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="text-blue-600" size={48} />
            <h1 className="text-5xl font-bold text-gray-900">MediInfo AI</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get general information about symptoms and diseases, including common treatments and medication timing
          </p>
        </header>

        <div className="flex flex-col items-center gap-8 mb-12">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
          />
          <Disclaimer />
        </div>

        {hasSearched && (
          <div className="max-w-4xl mx-auto">
            {results.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </h2>
                {results.map((condition) => (
                  <MedicalInfoCard key={condition.id} condition={condition} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-gray-500">
                  Try searching for common conditions like: headache, diabetes, anxiety, cold, fever
                </p>
              </div>
            )}
          </div>
        )}

        {!hasSearched && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Searches</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {medicalConditions.slice(0, 6).map((condition) => (
                  <button
                    key={condition.id}
                    onClick={() => {
                      setSearchQuery(condition.name);
                      setResults([condition]);
                      setHasSearched(true);
                    }}
                    className="px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors text-left font-medium"
                  >
                    {condition.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
