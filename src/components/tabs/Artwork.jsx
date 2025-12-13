import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import artworksData from '@/data/artworks'; // Import the new data

const Artwork = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredArtworks, setFilteredArtworks] = useState(artworksData); // Use imported data

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredArtworks(artworksData); // Use imported data
    } else {
      const filtered = artworksData.filter(artwork => artwork.category === activeTab);
      setFilteredArtworks(filtered);
    }
  }, [activeTab]);

  const getTabClassName = (tabName) => {
    return cn(
      "p-0 text-gray-400 rounded-none bg-transparent hover:bg-transparent",
      {
        "text-white border-b-2 border-yellow-400": activeTab === tabName,
      }
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">My Artwork</h2>
      <div className="mb-6 flex justify-start gap-8">
        <Button variant="ghost" onClick={() => setActiveTab('all')} className={getTabClassName('all')}>All</Button>
        <Button variant="ghost" onClick={() => setActiveTab('web')} className={getTabClassName('web')}>Web Design</Button>
        <Button variant="ghost" onClick={() => setActiveTab('mobile')} className={getTabClassName('mobile')}>Mobile App</Button>
      </div>
      <div className="grow overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <Card key={artwork.id} className="relative group overflow-hidden">
              <CardContent className="p-0">
                <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button asChild variant="secondary">
                    <Link to={`/artwork/${artwork.id}`}>
                      <Eye className="mr-2 h-4 w-4" /> Preview
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artwork;
