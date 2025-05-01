import React from 'react';
import { Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-2 rounded-lg">
        <Code className="h-6 w-6 text-white" />
      </div>
      <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
        RavenRock
      </span>
    </a>
  );
};

export default Logo;