export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/black logo .png" 
              alt="Baseaim Logo" 
              className="h-12 w-auto mb-2"
            />
            <p className="text-gray-600">Transforming local businesses with AI automation</p>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 Baseaim. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}