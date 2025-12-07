import React from 'react';
import { SectionHeader, Button, Card } from '../components/ui';
import { Download, Image as ImageIcon } from 'lucide-react';

const BrandAssets: React.FC = () => {
  const downloadSvg = (id: string, filename: string) => {
    const svgElement = document.getElementById(id);
    if (!svgElement) return;
    
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPng = (id: string, filename: string) => {
    const svgElement = document.getElementById(id);
    if (!svgElement) return;
    
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Export at high resolution (1024x1024)
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1024, 1024);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <SectionHeader title="Brand Assets" subtitle="Logos and icons for ShipSLC." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colorful Icon */}
          <Card className="p-8 flex flex-col items-center gap-6">
             <h3 className="font-bold text-lg dark:text-white">Colorful Icon</h3>
             <div className="w-32 h-32 rounded-3xl shadow-lg flex items-center justify-center bg-transparent">
                <svg id="icon-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="128" height="128" className="drop-shadow-xl">
                    <defs>
                        <linearGradient id='brand-grad' x1='0' y1='0' x2='100%' y2='100%'>
                        <stop offset='0%' stopColor='#6D28D9'/>
                        <stop offset='50%' stopColor='#C026D3'/>
                        <stop offset='100%' stopColor='#F59E0B'/>
                        </linearGradient>
                    </defs>
                    <rect width='32' height='32' rx='8' fill='url(#brand-grad)'/>
                    <path d='m10.6 6 5.3 10.6 6.6-6.6 6.6 20H2.6L10.6 6z' transform='scale(0.75) translate(5,2)' fill='none' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
             </div>
             <div className="w-full grid grid-cols-1 gap-3">
                <Button onClick={() => downloadPng('icon-color', 'shipslc-icon-color.png')} variant="secondary" icon={ImageIcon} className="w-full">
                  Download PNG
                </Button>
                <Button onClick={() => downloadSvg('icon-color', 'shipslc-icon-color.svg')} variant="ghost" icon={Download} className="w-full">
                  Download SVG
                </Button>
             </div>
          </Card>

          {/* Black Icon */}
          <Card className="p-8 flex flex-col items-center gap-6">
             <h3 className="font-bold text-lg dark:text-white">Black Icon</h3>
             <div className="w-32 h-32 rounded-3xl shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <svg id="icon-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="128" height="128">
                    <rect width='32' height='32' rx='8' fill='#000000'/>
                    <path d='m10.6 6 5.3 10.6 6.6-6.6 6.6 20H2.6L10.6 6z' transform='scale(0.75) translate(5,2)' fill='none' stroke='white' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
             </div>
             <div className="w-full grid grid-cols-1 gap-3">
                <Button onClick={() => downloadPng('icon-black', 'shipslc-icon-black.png')} variant="secondary" icon={ImageIcon} className="w-full">
                  Download PNG
                </Button>
                <Button onClick={() => downloadSvg('icon-black', 'shipslc-icon-black.svg')} variant="ghost" icon={Download} className="w-full">
                  Download SVG
                </Button>
             </div>
          </Card>

          {/* White Icon */}
          <Card className="p-8 flex flex-col items-center gap-6">
             <h3 className="font-bold text-lg dark:text-white">White Icon</h3>
             <div className="w-32 h-32 rounded-3xl shadow-lg flex items-center justify-center bg-gray-900 border border-gray-700">
                <svg id="icon-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="128" height="128">
                    <rect width='32' height='32' rx='8' fill='#FFFFFF'/>
                    <path d='m10.6 6 5.3 10.6 6.6-6.6 6.6 20H2.6L10.6 6z' transform='scale(0.75) translate(5,2)' fill='none' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
                </svg>
             </div>
             <div className="w-full grid grid-cols-1 gap-3">
                <Button onClick={() => downloadPng('icon-white', 'shipslc-icon-white.png')} variant="secondary" icon={ImageIcon} className="w-full">
                  Download PNG
                </Button>
                <Button onClick={() => downloadSvg('icon-white', 'shipslc-icon-white.svg')} variant="ghost" icon={Download} className="w-full">
                  Download SVG
                </Button>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrandAssets;